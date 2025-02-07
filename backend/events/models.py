from django.db import models
from members.models import Member
from django.core.validators import MinValueValidator, MaxValueValidator
from django.utils.translation import gettext_lazy as _
from users.models import Department
from datetime import datetime

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
    weight = models.IntegerField(validators=[MinValueValidator(1), MaxValueValidator(5)])
    submited_on = models.DateTimeField()

    def __str__(self):
        return str(self.name)


class Score(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    score = models.IntegerField(default=0)
    month = models.IntegerField()
    year = models.IntegerField()

    def update_score(self, contribution_weight):
        self.score += contribution_weight * 10
        self.save()

    @classmethod
    def reset_monthly_scores(cls):
        current_month = datetime.now().month
        current_year = datetime.now().year
        for score in cls.objects.all():
            ScoreHistory.objects.create(
                member=score.member,
                score=score.score,
                month=score.month,
                year=score.year
            )
        cls.objects.filter(month=current_month, year=current_year).update(score=0)

    def __str__(self):
        return f"{self.member} - {self.score} ({self.month}/{self.year})"


class ScoreHistory(models.Model):
    member = models.ForeignKey(Member, on_delete=models.CASCADE)
    score = models.IntegerField()
    month = models.IntegerField()
    year = models.IntegerField()

    def __str__(self):
        return f"{self.member} - {self.score} ({self.month}/{self.year})"