from django.urls import path
from .views import SendFeedbackView

urlpatterns = [
    path('feedback/', SendFeedbackView.as_view(), name='api-login'),
]
