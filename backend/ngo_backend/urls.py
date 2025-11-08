from django.contrib import admin
from django.urls import path, include

# --- ADD THESE NEW IMPORTS ---
from django.conf import settings
from django.conf.urls.static import static
# -----------------------------

from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('admin/', admin.site.urls),

    # App APIs
    path('api/', include('blog.urls')),
    path('api/about/', include('about.urls')),
    path('api/projects/', include('projects.urls')),
    path('api/gallery/', include('gallery.urls')),
    # We will add the 'about' api urls here later

    # Auth APIs
    path('api/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('api/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
]

# --- ADD THIS BLOCK AT THE BOTTOM ---
# This tells Django to serve our uploaded files in development mode
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
# ------------------------------------