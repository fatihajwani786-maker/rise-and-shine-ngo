from rest_framework import generics
from .models import Project, ProjectPageContent
from .serializers import ProjectSerializer, ProjectDetailSerializer, ProjectPageContentSerializer

class ProjectListView(generics.ListAPIView):
    """
    API view to list all projects (for the main /projects page).
    """
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer # Uses the SIMPLE serializer


class ProjectDetailView(generics.RetrieveAPIView):
    """
    NEW: API view to get one single project by its ID (for the /projects/1 page).
    """
    queryset = Project.objects.all()
    serializer_class = ProjectDetailSerializer # Uses the DETAILED serializer
    lookup_field = 'pk' # 'pk' means primary key, or id


class ProjectPageContentView(generics.RetrieveAPIView):
    """
    NEW: API view to get the singleton Project Page content (overview text, etc.).
    """
    queryset = ProjectPageContent.objects.all()
    serializer_class = ProjectPageContentSerializer

    def get_object(self):
        # Get or create the single object
        obj, created = ProjectPageContent.objects.get_or_create(pk=1)
        return obj