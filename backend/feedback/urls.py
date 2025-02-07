from django.urls import path
from .views import SendFeedbackView

urlpatterns = [
    path('', SendFeedbackView.as_view(), name='api-login'),
]
