from rest_framework import generics
from .models import AboutPageContent, TeamMember
from .serializers import AboutPageContentSerializer, TeamMemberSerializer

class AboutPageContentView(generics.RetrieveAPIView):
    """
    API view to retrieve the singleton About Us Page content.
    We use RetrieveAPIView and override get_object to always
    return the single object (pk=1).
    """
    queryset = AboutPageContent.objects.all()
    serializer_class = AboutPageContentSerializer

    def get_object(self):
        # We know there is only one object, and we set its pk=1 in the admin
        obj, created = AboutPageContent.objects.get_or_create(pk=1)
        return obj

class TeamMemberListView(generics.ListAPIView):
    """
    API view to list all team members, ordered by the 'order' field.
    """
    queryset = TeamMember.objects.all()
    serializer_class = TeamMemberSerializer