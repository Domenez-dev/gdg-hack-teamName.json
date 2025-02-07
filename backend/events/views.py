from rest_framework import viewsets
from .models import Event, Contribution, Score, ScoreHistory
from .serializers import EventSerializer, ContributionSerializer,DepartementSerializer, ScoreSerializer, ScoreHistorySerializer
from users.models import Department

class EventViewSet(viewsets.ModelViewSet):
    queryset = Event.objects.all()
    serializer_class = EventSerializer

class ContributionViewSet(viewsets.ModelViewSet):
    queryset = Contribution.objects.all()
    serializer_class = ContributionSerializer

class DepartementsViewSet(viewsets.ModelViewSet):
    queryset = Department.objects.all()
    serializer_class = DepartementSerializer

class ScoreViewSet(viewsets.ModelViewSet):
    queryset = Score.objects.all()
    serializer_class = ScoreSerializer

class ScoreHistoryViewSet(viewsets.ModelViewSet):
    queryset = ScoreHistory.objects.all()
    serializer_class = ScoreHistorySerializer