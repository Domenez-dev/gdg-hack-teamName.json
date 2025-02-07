from django.urls import path
from .views import discord_login, discord_login_redirect, discord_logout

app_name = 'discord'

urlpatterns = [
    path('login/', discord_login, name='discord-login'),
    path('redirect/', discord_login_redirect, name='discord-login-redirect'),
    path('logout/', discord_logout, name='discord-logout'),
]
