from django.db import models
from members.models import Member
from django.utils.translation import gettext_lazy as _
from users.models import Department

# Create your models here.

class Event(models.Model):
    id = models.AutoField(primary_key=True)
    event_name = models.CharField(max_length=255)
    event_start_date = models.DateTimeField()
    event_end_date = models.DateTimeField()
    event_description = models.TextField()
    departments = models.ManyToManyField(Department, blank=False)

    def __str__(self):
        return str(self.event_name)
    

class Contribution(models.Model):
    id = models.AutoField(primary_key=True)
    event = models.ForeignKey(Event, on_delete=models.CASCADE)
    user = models.ForeignKey(Member, on_delete=models.CASCADE)
    task_name = models.CharField(max_length=255)
    weight = models.IntegerField()
    submited_on = models.DateTimeField()

    def __str__(self):
        return str(self.name)