from django.http import JsonResponse

class AdminAuthMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        # Allow login/logout endpoints without authentication
        if request.path.startswith('/admin/login') or request.path.startswith('/admin/logout'):
            return self.get_response(request)

        # Restrict other endpoints to authenticated admin users
        if not request.user.is_authenticated or not request.user.is_staff:
            return JsonResponse({"error": "Unauthorized - Admins only"}, status=401)

        return self.get_response(request)
