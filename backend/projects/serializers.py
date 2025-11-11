from rest_framework import serializers
from .models import Project, ProjectPageContent
# --- Import the other serializers ---
from gallery.serializers import GalleryItemSerializer
from about.serializers import TeamMemberSerializer

class ProjectSerializer(serializers.ModelSerializer):
    """
    This is the SIMPLE serializer for the main project list.
    """
    image = serializers.ImageField(use_url=True) 

    class Meta:
        model = Project
        # Note: We've added the new fields to the list
        fields = ['id', 'title', 'description', 'image', 'order', 'category', 'status']


class ProjectDetailSerializer(serializers.ModelSerializer):
    """
    This is the NEW, DETAILED serializer for the single project page.
    It includes all the related gallery items and team members.
    """
    image = serializers.ImageField(use_url=True)

    # --- These lines automatically fetch the related items ---
    gallery_items = GalleryItemSerializer(many=True, read_only=True)
    team_members = TeamMemberSerializer(many=True, read_only=True)

    class Meta:
        model = Project
        # Include all the new detailed fields
        fields = [
            'id', 'title', 'category', 'status', 'image',
            'detailed_description', 'impact_stats', 'timeline_info',
            'gallery_items', 'team_members' # The related items
        ]

class ProjectPageContentSerializer(serializers.ModelSerializer):
    """
    This is for the 'Projects' page overview text.
    """
    class Meta:
        model = ProjectPageContent
        fields = '__all__'