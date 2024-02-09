from .views import UserCreateView, UserView
from django.urls import path

urlpatterns = [
  path("", UserCreateView.as_view()),
  path("details/", UserView.as_view()),
]
