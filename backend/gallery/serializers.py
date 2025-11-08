from rest_framework import serializers
from .models import GalleryItem

class GalleryItemSerializer(serializers.ModelSerializer):
    # This makes the API return a full URL for the image
    image = serializers.ImageField(use_url=True) 

    class Meta:
        model = GalleryItem
        fields = ['id', 'title', 'image', 'video_url', 'order']