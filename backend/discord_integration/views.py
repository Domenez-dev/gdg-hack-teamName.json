from django.shortcuts import redirect 
from django.conf import settings
from django.http import JsonResponse
from django.contrib.auth import authenticate, authenticate, login
import requests

def discord_login(request):
    return redirect(settings.DISCORD_LOGIN_URL)

def discord_login_redirect(request):
    print(f"Client ID: {settings.DISCORD_CLIENT_ID}, Client Secret: {settings.DISCORD_CLIENT_SECRET}")

    code = request.GET.get('code')
    data = {
        'client_id': settings.DISCORD_CLIENT_ID,
        'client_secret': settings.DISCORD_CLIENT_SECRET,
        'grant_type': 'authorization_code',
        'code': code,
        'redirect_uri': settings.DISCORD_REDIRECT_URI,
        'scope': 'identify email connections'
    }
    headers = {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
    response = requests.post('https://discord.com/api/oauth2/token', data=data, headers=headers)
    credentials = response.json()
    access_token = credentials.get('access_token')
    response = requests.get('https://discord.com/api/users/@me', headers={'Authorization': f'Bearer {access_token}'})
    user = response.json()

    authenticate(request, user=user)
    return JsonResponse({"user": user})
