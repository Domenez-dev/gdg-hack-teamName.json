from django.contrib.auth.backends import BaseBackend
from .models import DiscordUser

class DiscordBackend(BaseBackend):
    def authenticate(self, request, user) -> DiscordUser:
        find_user = DiscordUser.objects.filter(id=user["id"])
        if len(find_user) > 0:
            new_user = DiscordUser(
                id=user.id,
                username=user.username,
                discriminator=user.discriminator,
                avatar=user.avatar,
                email=user.email,
                verified=user.verified,
                mfa_enabled=user.mfa_enabled,
                flags=user.flags,
                public_flags=user.public_flags
            )
            new_user.save()
            return new_user
        else:
            print("User not found")
