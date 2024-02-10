from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from .serializers import PetSerializer, PetAdoptSerializer
from .models import Pet
from config.utils import make_request, upload_image

class PetsView(APIView):

  permission_classes = (IsAuthenticated, )

  def get(self, request):
    pets = Pet.objects.filter(owner=request.user)
    pet_serializer = PetSerializer(pets, many=True)
    data = {
      "filter": {
      "owner_id": {
        "equals": request.user.id
        }
      }
    }
    response = make_request("GET", "rest/pet", data=data)
    data = response.json()
    return Response(data.get("data"))

  def post(self, request):
    data = request.data
    pet_serializer = PetSerializer(data=data, context={'request': request})
    profile_img = request.FILES.get("profile_img")
    
    if pet_serializer.is_valid():
      image_url = upload_image(profile_img)
      data = {
        "id": data.get("id"),
        "name": data.get("name"),
        "breed": data.get("breed"),
        "category": data.get("category"),
        "birth_year": data.get("birth_year"),
        "interests": data.get("interests"),
        "precautions": data.get("precautions"),
        "user_ref": {"connect": {"id": request.user.id}},
        "gender": data.get("gender"),
        "profile_img": image_url,
        "open_to_adopt": False,
      }

      response = make_request("POST", "rest/pet/__one", data)
      data = response.json()
      
      return Response(data.get("data"), status=status.HTTP_201_CREATED)
    print(pet_serializer.errors)
    return Response(pet_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class PetView(APIView):
  def get(self, request, pk):
    response = make_request("GET", f"custom/petfolio?id={pk}")
    data = response.json()
    return Response(data.get("data"))
  
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
    res = make_request("DELETE", f"rest/pet/{pk}")
    return Response({'message': 'Pet deleted'}, status=status.HTTP_200_OK)
  
class PetAdoptView(APIView):

  permission_classes = (IsAuthenticated, )

  def post(self, request, pk):
    data = request.data
    data = {
      "start_date": data.get("start_date")+"T21:40:30Z",
      "end_date": data.get("end_date")+"T21:40:30Z",
      "owner_message": data.get("owner_message"),
      "amount": data.get("amount"),
      "pet_ref": {"connect": {"id": pk}},
    }
    response = make_request("POST", f"rest/pet_adopt/__one", data)
    data = response.json()
    make_request("PATCH", f"rest/pet/{pk}", data={"open_to_adopt": True})
    print(data)
    return Response(data.get("data"), status=status.HTTP_201_CREATED)

    
  def get(self, request, pk):
    if not Pet.objects.filter(id=pk).exists():
      return Response({'error': 'Pet not found'}, status=status.HTTP_404_NOT_FOUND)
    pet = Pet.objects.get(id=pk)
    pet_adopts = pet.petadopt_set.all()
    pet_adopt_serializer = PetAdoptSerializer(pet_adopts, many=True)
    return Response(pet_adopt_serializer.data)

class AdoptionPetsView(APIView):
  def get(self, request):
    response = make_request("GET", "custom/open_pets")
    print(response)
    data = response.json()

    print(data)
    
    return Response(data.get("data"))