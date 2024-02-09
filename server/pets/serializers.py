from .models import Pet
from rest_framework import serializers

class PetSerializer(serializers.ModelSerializer):
  class Meta:
    fields = "__all__"
    model = Pet

  def validate(self, data):
    data['owner'] = self.context['request'].user
    validated_data = super().validate(data)
    return validated_data