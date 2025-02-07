from rest_framework import viewsets
from .models import Event, Contribution
from .serializers import EventSerializer, ContributionSerializer,DepartementSerializer
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