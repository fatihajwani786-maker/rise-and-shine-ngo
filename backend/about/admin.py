from django.contrib import admin
from .models import AboutPageContent, TeamMember

@admin.register(AboutPageContent)
class AboutPageContentAdmin(admin.ModelAdmin):
    # ... (This whole class stays exactly the same)
    def has_add_permission(self, request):
        return not AboutPageContent.objects.exists()
    def has_delete_permission(self, request, obj=None):
        return False

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    """
    Admin for Team Members.
    """
    list_display = ('name', 'role', 'order')
    list_editable = ('order',)
    search_fields = ('name', 'role')
    # This adds the cool horizontal filter for 'projects'
    filter_horizontal = ('projects',)