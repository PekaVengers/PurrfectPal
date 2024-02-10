from .serializers import UserSerailizer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from django.conf import settings
import requests
from config.utils import make_request

class UserCreateView(APIView):
  def post(self, request):
    data = request.data
    user_serializer = UserSerailizer(data=data)
    if user_serializer.is_valid():
      user = user_serializer.save()

      data = {
          "username": data.get("username"),
          "phone": data.get("phone"),
          "location": data.get("location"),
          "name": data.get("name"),
          "id": user.id,
      }
      response = make_request('POST', 'rest/user/__one', data)
      print(response)

      return Response(user_serializer.data, status=status.HTTP_201_CREATED)
    return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserView(APIView):

  permission_classes = (IsAuthenticated, )
  
  def get(self, request):
    response = make_request('GET', f'rest/user/{request.user.id}')
    data = response.json()
    return Response(data.get('data'))

  def put(self, request):
    data = request.data
    user_serializer = UserSerailizer(instance=request.user, data=data, partial=True)
    if user_serializer.is_valid():
      user_serializer.save()
      return Response(user_serializer.data, status=status.HTTP_200_OK)
    return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
