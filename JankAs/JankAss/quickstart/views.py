from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.


from django.contrib.auth.models import User, Group
from django.views import View
from rest_framework import viewsets, renderers
from JankAss.quickstart.serializers import UserSerializer, GroupSerializer
#from JankAs.JankAss.quickstart.serializers import UserSerializer, GroupSerializer
#from rest_framework.decorators import action, api_view
from rest_framework.response import Response


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer

class Dupa(View):
    #def get(self, request, format=None):
    #@api_view(['GET', 'POST', ])
    def get(self, request, format=None):
        print('dupacyce')
        return HttpResponse("i dupa i cyce sa")

