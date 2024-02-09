from django.urls import path
from .views import PetsView, PetView, PetAdoptView, AdoptionPetsView

urlpatterns = [
  path("", PetsView.as_view()),
  path("<int:pk>/", PetView.as_view()),
  path("adopt/<int:pk>/", PetAdoptView.as_view()),
  path("adopt/", AdoptionPetsView.as_view()),
]
