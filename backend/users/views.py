from django.shortcuts import redirect
from django.contrib.auth import logout
from django.utils import timezone
from .models import UserSession
from django.conf import settings
from django.http import JsonResponse
from django.contrib.auth import login
from .models import CustomUser
import requests
from django.contrib.sessions.models import Session

# Decorator to exclude the login function from the middlware logic 
from functools import wraps

def session_exempt(view_func):
    @wraps(view_func)
    def _wrapped_view(request, *args, **kwargs):
        return view_func(request, *args, **kwargs)
    
    # Add a custom attribute to mark the view as exempt
    _wrapped_view.session_exempt = True
    return _wrapped_view



def session_exists(session_key):
    return Session.objects.filter(session_key=session_key).exists()

@session_exempt
def discord_login(request):
    return redirect(settings.DISCORD_LOGIN_URL)

@session_exempt
def discord_login_redirect(request):
    code = request.GET.get('code')
    
    # Exchange code for access token
    data = {
        'client_id': settings.DISCORD_CLIENT_ID,
        'client_secret': settings.DISCORD_CLIENT_SECRET,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': settings.DISCORD_REDIRECT_URI,
        'scope': 'identify email guilds'
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    
    token_response = requests.post('https://discord.com/api/oauth2/token', data=data, headers=headers)
    token_data = token_response.json()
    access_token = token_data.get('access_token')

    if not access_token:
        return JsonResponse({'error': 'Failed to retrieve access token'}, status=400)

    # Get user info
    user_response = requests.get('https://discord.com/api/users/@me', 
                                 headers={'Authorization': f'Bearer {access_token}'})
    user_data = user_response.json()

    # Get user's guild memberships to check roles
    guilds_response = requests.get('https://discord.com/api/users/@me/guilds',
                                   headers={'Authorization': f'Bearer {access_token}'})
    guilds = guilds_response.json()

    # Check if the user has required roles in the specific server
    server_id = settings.DISCORD_SERVER_ID  # Add your Discord server ID in settings
    roles_response = requests.get(f'https://discord.com/api/users/@me/guilds/{server_id}/member',
                                  headers={'Authorization': f'Bearer {access_token}'})
    member_info = roles_response.json()
    print(roles_response)

    user_roles = member_info.get('roles', [])
    
    # Determine user's department based on Discord roles
    department = None
    is_admin = False

    print(user_roles)
    if '1337380864970981426' in user_roles:  # Replace with actual HR role ID
        department = 'HR'
        is_admin = True
    elif 'Developer' in user_roles:  # Replace with actual Co-Organizer role ID
        department = 'DEV'  # Or whichever department fits
    else:
        return JsonResponse({'error': 'Unauthorized: No required roles found'}, status=403)

    # Create or update the user in the database
    user, created = CustomUser.objects.update_or_create(
        discord_id=user_data['id'],
        defaults={
            'name': user_data['username'],
            'department': department,
            'is_admin': is_admin,
            'is_active': True
        }
    )

    discord_logout(request)

    # Log the user in
    login(request, user)

    # Ensure session is saved after login
    if not request.session.session_key:
        request.session.save()  # This ensures the session is stored in the database

    session_key = request.session.session_key
    print(f"Session Key After Login: {session_key}")

    # Save the session in UserSession model
    UserSession.objects.create(
        user=user,
        session_key=session_key,
        is_active=True,
        login_time=timezone.now(),
        logout_time=None
    )

    print(f"Session Key: {request.session.session_key}")
    print(f"Session Data: {request.session.items()}")

    
    return JsonResponse({'message': 'Logged in successfully', 'user': {
        'name': user.name,
        'department': user.get_department_display(),
        'is_admin': user.is_admin
    }})


def discord_logout(request):
    session_key = request.session.session_key
    if session_key:
        UserSession.objects.filter(session_key=session_key).update(
            logout_time=timezone.now(),
            is_active=False
        )

    logout(request)
    return JsonResponse({'message': 'Logged out successfully'})
