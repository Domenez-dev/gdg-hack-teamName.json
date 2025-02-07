from django.db import models

# Create your models here.

class Event(models.Model):
    id = models.AutoField(primary_key=True)
    event_name = models.CharField(max_length=255)
    event_start_date = models.DateTimeField()
    event_end_date = models.DateTimeField()
    event_description = models.TextField()

    def __str__(self):
        return str(self.name)