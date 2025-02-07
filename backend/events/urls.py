from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import EventViewSet, ContributionViewSet,DepartementsViewSet, ScoreViewSet, ScoreHistoryViewSet

router = DefaultRouter()
router.register(r'events', EventViewSet)
router.register(r'contributions', ContributionViewSet)
router.register(r'departements', DepartementsViewSet)
router.register(r'scores', ScoreViewSet)
router.register(r'score-history', ScoreHistoryViewSet)


urlpatterns = [
    path('', include(router.urls)),
]