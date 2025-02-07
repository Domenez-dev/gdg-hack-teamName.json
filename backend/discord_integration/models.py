from django.db import models

class DiscordUser(models.Model):
    id = models.CharField(max_length=50, primary_key=True)
    username = models.CharField(max_length=50)
    discriminator = models.CharField(max_length=4)
    avatar = models.CharField(max_length=100)
    email = models.EmailField()
    verified = models.BooleanField()
    mfa_enabled = models.BooleanField()
    flags = models.IntegerField()
    public_flags = models.IntegerField()

    def __str__(self):
        return str(self.username)
