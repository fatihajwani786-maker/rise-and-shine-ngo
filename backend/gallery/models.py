from django.db import models
from projects.models import Project  # <-- 1. IMPORT THE PROJECT MODEL

class GalleryItem(models.Model):
    title = models.CharField(max_length=200, help_text="A caption for the photo or video.")
    
    # --- 2. ADD THIS NEW FIELD ---
    # This links the gallery item to a specific project.
    # It's optional (blank=True, null=True) so some items can be "general gallery"
    # and not tied to any project.
    project = models.ForeignKey(
        Project, 
        on_delete=models.SET_NULL, 
        blank=True, 
        null=True,
        related_name="gallery_items"
    )
    # -----------------------------

    image = models.ImageField(
        upload_to='gallery/',
        blank=True, 
        null=True, 
        help_text="Upload a photo.")
    
    video_url = models.URLField(
        blank=True, 
        null=True, 
        help_text="Optional: If this is a video, paste the full URL")
    
    order = models.PositiveIntegerField(default=0, help_text="Order to display (e.g., 1, 2, 3...)")

    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['order']
        verbose_name = "Gallery Item"
        verbose_name_plural = "Gallery Items"