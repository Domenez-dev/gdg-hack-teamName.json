
from django.shortcuts import redirect
from django.urls import reverse

class SessionCheckMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Skip session check for login URL
        if request.path == reverse('discord:discord-login'):
            return self.get_response(request)

        # Check for '_auth_user_id' in session data
        if '_auth_user_id' not in request.session:
            print("Session Key Missing: Redirecting to login")
            return redirect(reverse('discord:discord-login'))

        # Optionally, check backend to ensure it's from Discord
        if request.session.get('_auth_user_backend') != 'users.auth.DiscordBackend':
            print("Incorrect Backend: Redirecting to login")
            return redirect(reverse('discord:discord-login'))

        # Proceed if session is valid
        return self.get_response(request)

