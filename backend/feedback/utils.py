from django.template.loader import render_to_string
from rest_framework.exceptions import PermissionDenied
from .authenticate_gmail import GmailService

def send_email(request, recipient_email, feedback_type, context={}):
    """
    Sends an email of type 'warning' or 'appreciation' using HTML templates.
    
    :param request: The HTTP request to verify admin permissions.
    :param recipient_email: The recipient's email address.
    :param feedback_type: Either 'warning' or 'appreciation'.
    :param context: Additional context for rendering templates (e.g., member_name).
    """

    # Check if the user is authenticated and is an admin
    if not request.user.is_authenticated or not request.user.is_staff:
        raise PermissionDenied("You do not have permission to send emails.")

    gmail_service = GmailService()  # Ensure you have this service configured properly.

    # Define subject and template based on feedback_type
    if feedback_type == "warning":
        subject = "⚠️ Warning: Your account is at risk"
        template_name = 'feedback/warning_email.html'
    elif feedback_type == "appreciation":
        subject = "  Thank You for Your Contribution!"
        template_name = 'feedback/appreciation_email.html'
    else:
        raise ValueError("Invalid feedback type. Must be 'warning' or 'appreciation'.")

    # Render the HTML email content using Django templates
    body = render_to_string(template_name, context)

    # Attempt to send the email
    try:
        gmail_service.send_email(
            recipient_email=recipient_email,
            subject=subject,
            body=body,
        )
        print(f"Email successfully sent to {recipient_email}.")
    except Exception as e:
        print(f"Failed to send email to {recipient_email}. Error: {e}")


