from django.contrib import admin
from .models import GalleryItem

@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    # Add 'project' to the list
    list_display = ('title', 'project', 'order')
    list_editable = ('order',)
    search_fields = ('title',)
    # Add a filter to find photos for a specific project
    list_filter = ('project',)