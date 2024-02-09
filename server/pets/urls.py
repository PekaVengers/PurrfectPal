from django.urls import path
from .views import PetsView, PetView
from django.conf.urls.static import static
from django.conf import settings

urlpatterns = [
  path("", PetsView.as_view()),
  path("<int:pk>/", PetView.as_view()),
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
