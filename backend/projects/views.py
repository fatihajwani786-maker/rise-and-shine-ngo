from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Project
from .serializers import ProjectSerializer

class ProjectListView(generics.ListAPIView):
    """
    API view to list all projects, ordered by the 'order' field.
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer