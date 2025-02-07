
from django.db import models

class Member(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=255)
    email = models.EmailField(blank=True, null=True)  # Discord doesn't provide email via API for privacy reasons
    discord_id = models.CharField(max_length=255, unique=True)  # Unique Discord user ID
    joined_date = models.DateTimeField(auto_now_add=True)
    engagement_zone = models.CharField(max_length=255, default='General')  # Default value
    monthly_score = models.IntegerField(default=0)  # Default score is 0

    def __str__(self):
        return str(self.name)

class Badge(models.Model):
    id = models.AutoField(models.Model, primary_key=True)
    name = models.CharField(max_length=255)
    member_id = models.ForeignKey(Member, on_delete=models.CASCADE)
    