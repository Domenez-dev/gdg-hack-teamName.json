from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import BadgeViewSet

router = DefaultRouter()
router.register(r'events', BadgeViewSet)

urlpatterns = [
    path('', include(router.urls)),
]