from django.urls import path
from .views import discord_login, discord_login_redirect, discord_logout

urlpatterns = [
    path('login/', discord_login, name='discord-api-login'),
    path('redirect/', discord_login_redirect, name='discord-api-login-redirect'),
    path('logout/', discord_logout, name='logout'),
]
