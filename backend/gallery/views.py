from rest_framework import generics
from .models import GalleryItem
from .serializers import GalleryItemSerializer

class GalleryItemListView(generics.ListAPIView):
    """
    API view to list all gallery items, ordered by the 'order' field.
    """
    queryset = GalleryItem.objects.all()
    serializer_class = GalleryItemSerializer