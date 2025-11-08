from django.db import models

# Create your models here.
from django.db import models

class GalleryItem(models.Model): # Renamed from MediaItem
    title = models.CharField(max_length=200, help_text="A caption for the photo or video.")

    image = models.ImageField(
        upload_to='gallery/', # Store in a 'gallery' subfolder
        blank=True, 
        null=True, 
        help_text="Upload a photo. (If this is a video, this can be a thumbnail)")

    video_url = models.URLField(
        blank=True, 
        null=True, 
        help_text="Optional: If this is a video, paste the full URL (e.g., from YouTube or Vimeo)")

    order = models.PositiveIntegerField(default=0, help_text="Order to display (e.g., 1, 2, 3...)")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']
        verbose_name = "Gallery Item"
        verbose_name_plural = "Gallery Items"