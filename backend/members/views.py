from rest_framework import viewsets
from .models import Badge
from .serializer import BadgeSerializer

# Create your views here.
class BadgeViewSet(viewsets.ModelViewSet):
    queryset = Badge.objects.all()
    serializer_class = BadgeSerializer