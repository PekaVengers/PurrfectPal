from rest_framework import serializers
from .models import User

class UserSerailizer(serializers.ModelSerializer):
  confirm_password = serializers.CharField(write_only=True)

  class Meta:
    model = User
    fields = ["name", "username", "phone", "location", "password", "confirm_password"]
    extra_kwargs = {'password': {'write_only': True}}
  
  def validate(self, data):
    password = data.get("password")
    confirm_password = data.pop("confirm_password", None)

    if password != confirm_password:
      raise serializers.ValidationError("Passwords do not match.")
    validated_data = super().validate(data)
    return validated_data
  
  def create(self, validated_data):
    user = User.objects.create_user(**validated_data)
    return user