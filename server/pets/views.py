from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .serializers import PetSerializer, PetAdoptSerializer
from .models import Pet

class PetsView(APIView):

  permission_classes = (IsAuthenticated, )

  def get(self, request):
    pets = Pet.objects.filter(owner=request.user)
    pet_serializer = PetSerializer(pets, many=True)
    return Response(pet_serializer.data)

  def post(self, request):
    data = request.data
    pet_serializer = PetSerializer(data=data, context={'request': request})

    if pet_serializer.is_valid():
      shop = pet_serializer.save()
      return Response(pet_serializer.data, status=status.HTTP_201_CREATED)
    print(pet_serializer.errors)
    return Response(pet_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PetView(APIView):
  def get(self, request, pk):
    if not Pet.objects.filter(id=pk).exists():
      return Response({'error': 'Pet not found'}, status=status.HTTP_404_NOT_FOUND)
    pet = Pet.objects.get(id=pk)
    pet_serializer = PetSerializer(pet)
    return Response(pet_serializer.data)
  
  def put(self, request, pk):
    if not Pet.objects.filter(id=pk).exists():
      return Response({'error': 'Pet not found'}, status=status.HTTP_404_NOT_FOUND)
    pet = Pet.objects.get(id=pk)
    data = request.data
    pet_serializer = PetSerializer(instance=pet, data=data, partial=True)

    if pet_serializer.is_valid():
      pet_serializer.save()
      return Response(pet_serializer.data, status=status.HTTP_200_OK)
    return Response(pet_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  def delete(self, request, pk):
    if not Pet.objects.filter(id=pk).exists():
      return Response({'error': 'Pet not found'}, status=status.HTTP_404_NOT_FOUND)
    pet = Pet.objects.get(id=pk)
    pet.delete()
    return Response({'message': 'Pet deleted'}, status=status.HTTP_200_OK)
  
class PetAdoptView(APIView):

  permission_classes = (IsAuthenticated, )

  def post(self, request, pk):
    if not Pet.objects.filter(id=pk).exists():
      return Response({'error': 'Pet not found'}, status=status.HTTP_404_NOT_FOUND)
    pet = Pet.objects.get(id=pk)
    data = request.data
    data['pet'] = pet.id
    pet_adopt_serializer = PetAdoptSerializer(data=data)

    if pet_adopt_serializer.is_valid():
      pet_adopt_serializer.save()
      return Response(pet_adopt_serializer.data, status=status.HTTP_201_CREATED)
    return Response(pet_adopt_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

  def get(self, request, pk):
    if not Pet.objects.filter(id=pk).exists():
      return Response({'error': 'Pet not found'}, status=status.HTTP_404_NOT_FOUND)
    pet = Pet.objects.get(id=pk)
    pet_adopts = pet.petadopt_set.all()
    pet_adopt_serializer = PetAdoptSerializer(pet_adopts, many=True)
    return Response(pet_adopt_serializer.data)