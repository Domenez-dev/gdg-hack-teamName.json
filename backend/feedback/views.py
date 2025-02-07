from rest_framework.permissions import IsAuthenticated
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .utils import send_email

from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator

@method_decorator(csrf_exempt, name='dispatch')
class SendFeedbackView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        recipient_email = request.data.get('email')
        feedback_type = request.data.get('type')  # 'warning' or 'appreciation'
        member_name = request.data.get('member_name', 'Member')

        # Send email
        send_email(
            request=request,
            recipient_email=recipient_email,
            feedback_type=feedback_type,
            context={'member_name': member_name}
        )

        return Response({"message": f"{feedback_type.capitalize()} email sent to {recipient_email}"}, status=status.HTTP_200_OK)

