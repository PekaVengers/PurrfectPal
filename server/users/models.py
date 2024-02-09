from django.db import models
from django.contrib.auth.models import AbstractUser
from phonenumber_field.modelfields import PhoneNumberField
class User(AbstractUser):
  name = models.CharField(max_length=100)
  username = models.EmailField(unique=True)
  phone = PhoneNumberField(unique=True)
  location = models.CharField(max_length=255)

  USERNAME_FIELD = "username"
  REQUIRED_FIELDS = []

  def __str__(self):
    return self.username