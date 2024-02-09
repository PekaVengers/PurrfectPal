from .serializers import UserSerailizer
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated

class UserCreateView(APIView):
  def post(self, request):
    data = request.data
    user_serializer = UserSerailizer(data=data)
    if user_serializer.is_valid():
      user_serializer.save()
      return Response(user_serializer.data, status=status.HTTP_201_CREATED)
    return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class UserView(APIView):

  permission_classes = (IsAuthenticated, )
  
  def get(self, request):
    user_serializer = UserSerailizer(instance=request.user)
    return Response(user_serializer.data)

  def put(self, request):
    data = request.data
    user_serializer = UserSerailizer(instance=request.user, data=data, partial=True)
    if user_serializer.is_valid():
      user_serializer.save()
      return Response(user_serializer.data, status=status.HTTP_200_OK)
    return Response(user_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
