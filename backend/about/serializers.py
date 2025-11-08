from rest_framework import serializers
from .models import AboutPageContent, TeamMember

class AboutPageContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = AboutPageContent
        # This selects all fields from the model
        fields = '__all__'

class TeamMemberSerializer(serializers.ModelSerializer):
    # This makes the API return a full URL (e.g., http://.../media/team/photo.jpg)
    # instead of just the filename (photo.jpg)
    image = serializers.ImageField(use_url=True) 

    class Meta:
        model = TeamMember
        fields = ['id', 'name', 'role', 'bio', 'image', 'order']