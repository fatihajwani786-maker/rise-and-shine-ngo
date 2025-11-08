from django.db import models

# Create your models here.
class Project(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField(help_text="A brief description of the project.")

    # We'll re-use the image upload feature
    image = models.ImageField(
        upload_to='projects/', 
        blank=True, 
        null=True, 
        help_text="Upload a photo for the project card.")

    order = models.PositiveIntegerField(default=0, help_text="Order to display (e.g., 1, 2, 3...)")

    def __str__(self):
        return self.title

    class Meta:
        ordering = ['order']