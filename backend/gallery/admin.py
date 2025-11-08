

# Register your models here.
from django.contrib import admin
from .models import GalleryItem

@admin.register(GalleryItem)
class GalleryItemAdmin(admin.ModelAdmin):
    list_display = ('title', 'order', 'video_url')
    list_editable = ('order',)
    search_fields = ('title',)