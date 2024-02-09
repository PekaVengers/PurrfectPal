from django.contrib import admin
from django.urls import path, include, re_path
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/pets/', include('pets.urls')),
    path('api/users/', include('users.urls')),
    re_path(r'^auth/', include('drf_social_oauth2.urls', namespace='drf')),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
