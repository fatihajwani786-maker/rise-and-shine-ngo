from django.contrib import admin
from .models import AboutPageContent, TeamMember

@admin.register(AboutPageContent)
class AboutPageContentAdmin(admin.ModelAdmin):
    """
    Custom admin for the AboutPageContent model to enforce a singleton.
    This ensures no one can add a *new* 'About Us' page content.
    They can only edit the existing one.
    """

    # This removes the "Add" button from the admin page
    def has_add_permission(self, request):
        return False

    # This removes the "Delete" button
    def has_delete_permission(self, request, obj=None):
        return False

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)
        # This is a small hack to ensure the first object is created
        # if it doesn't exist.
        try:
            AboutPageContent.objects.get(pk=1)
        except AboutPageContent.DoesNotExist:
            AboutPageContent.objects.create(
                pk=1,
                intro_text="Welcome! (Please edit this text)",
                history_text="Our NGO was founded in...",
            )

@admin.register(TeamMember)
class TeamMemberAdmin(admin.ModelAdmin):
    """
    Admin for Team Members.
    """
    list_display = ('name', 'role', 'order')
    list_editable = ('order',)