from django.http import JsonResponse

from backend.users.models import Department

# class AdminAuthMiddleware:
#     def __init__(self, get_response):
#         self.get_response = get_response

#     def __call__(self, request):
#         # Allow login/logout endpoints without authentication
#         if request.path.startswith('/admin/login') or request.path.startswith('/admin/logout'):
#             return self.get_response(request)

#         # Restrict other endpoints to authenticated admin users
#         if not request.user.is_authenticated or not request.user.is_staff:
#             return JsonResponse({"error": "Unauthorized - Admins only"}, status=401)

#         return self.get_response(request)


class HRAdminMiddleware:
    def __init__(self, get_response):
        self.get_response = get_response

    def __call__(self, request):
        if request.user.is_authenticated and request.user.departement == Department.HR:
            request.user.is_admin = True
            request.user.save()
        return self.get_response(request)

