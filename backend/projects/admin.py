from django.contrib import admin
from .models import Project, ProjectPageContent

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    # Show new fields in the list
    list_display = ('title', 'category', 'status', 'order')
    list_editable = ('order',)
    # Add filters for the new fields
    list_filter = ('status', 'category')
    search_fields = ('title', 'description')

@admin.register(ProjectPageContent)
class ProjectPageContentAdmin(admin.ModelAdmin):
    """
    Admin for the singleton Project Page Content.
    Prevents adding/deleting.
    """
    def has_add_permission(self, request):
        # Only allow adding if one doesn't exist
        return not ProjectPageContent.objects.exists()

    def has_delete_permission(self, request, obj=None):
        return False