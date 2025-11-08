from django.urls import path
from .views import GalleryItemListView

urlpatterns = [
    path('', GalleryItemListView.as_view(), name='gallery-item-list'),
]