from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, ContributionViewSet,DepartementsViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'contributions', ContributionViewSet)
router.register(r'departements', DepartementsViewSet)

urlpatterns = [
    path('', include(router.urls)),
]