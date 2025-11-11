from django.db import models
from projects.models import Project  # <-- 1. IMPORT THE PROJECT MODEL

class AboutPageContent(models.Model):
    # ... (all your existing AboutPageContent code... no changes here)
    intro_text = models.TextField(
        help_text="The main welcome message. e.g., 'Welcome to [NGO Name]!...'")
    history_text = models.TextField(
        help_text="The story behind the NGO, key milestones. e.g., 'Founded in 2015...'", 
        blank=True)
    core_values_text = models.TextField(
        help_text="Outline the principles (e.g., Integrity, Inclusivity...)", 
        blank=True)
    areas_of_focus_text = models.TextField(
        help_text="Briefly describe key focus areas. You can use markdown for bullet points.", 
        blank=True)
    impact_text = models.TextField(
        help_text="Share facts and statistics. e.g., 'Educated 5,000 children...'", 
        blank=True)
    cta_text = models.CharField(
        max_length=255, 
        help_text="A strong call to action. e.g., 'Join us in making a difference...'", 
        blank=True)

    def __str__(self):
        return "About Us Page Content"

    class Meta:
        verbose_name = "About Us Page Content"
        verbose_name_plural = "About Us Page Content"


class TeamMember(models.Model):
    name = models.CharField(max_length=100)
    role = models.CharField(max_length=100, help_text="e.g., Founder, Program Manager")
    bio = models.TextField(blank=True, help_text="A short biography.")
    image = models.ImageField(
        upload_to='team/', 
        blank=True, 
        null=True, 
        help_text="Upload a photo of the team member.")
    order = models.PositiveIntegerField(default=0, help_text="Order to display (e.g., 1, 2, 3...)")

    # --- 2. ADD THIS NEW FIELD ---
    # This links a team member to multiple projects.
    # A team member can be on many projects, and a project can have many members.
    projects = models.ManyToManyField(
        Project, 
        blank=True,
        related_name="team_members"
    )
    # -----------------------------

    def __str__(self):
        return f"{self.name} - {self.role}"
    
    class Meta:
        ordering = ['order']