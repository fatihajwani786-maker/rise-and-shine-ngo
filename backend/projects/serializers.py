from rest_framework import serializers
from .models import Project

class ProjectSerializer(serializers.ModelSerializer):
    # This makes the API return a full URL for the image
    image = serializers.ImageField(use_url=True) 

    class Meta:
        model = Project
        fields = ['id', 'title', 'description', 'image', 'order']