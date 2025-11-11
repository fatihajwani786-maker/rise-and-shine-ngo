from django.db import models

class Project(models.Model):
    
    # --- New Status & Category Fields ---
    STATUS_CHOICES = [
        ('Ongoing', 'Ongoing'),
        ('Completed', 'Completed'),
        ('Upcoming', 'Upcoming'),
    ]
    CATEGORY_CHOICES = [
        ('Education', 'Education'),
        ('Health', 'Health'),
        ('Empowerment', 'Empowerment'),
        ('Environment', 'Environment'),
        ('Other', 'Other'),
    ]

    title = models.CharField(max_length=200)
    
    # New fields for filtering
    status = models.CharField(max_length=20, choices=STATUS_CHOICES, default='Ongoing')
    category = models.CharField(max_length=20, choices=CATEGORY_CHOICES, default='Other')

    # This is the short description for the project card
    description = models.TextField(help_text="A brief summary for the project card.")
    
    image = models.ImageField(
        upload_to='projects/', 
        blank=True, 
        null=True, 
        help_text="A photo for the project card.")
    
    order = models.PositiveIntegerField(default=0, help_text="Order to display (e.g., 1, 2, 3...)")

    # --- New Fields for the Project Detail Page (Req 3) ---
    detailed_description = models.TextField(
        blank=True, 
        help_text="Full, detailed description for the project's own page.")
    
    impact_stats = models.TextField(
        blank=True, 
        help_text="Key impact stats. e.g., '10,000+ children educated'. Use line breaks.")
    
    timeline_info = models.TextField(
        blank=True, 
        help_text="Project timeline or milestones. e.g., 'Phase 1: Completed'. Use line breaks.")


    def __str__(self):
        return self.title
    
    class Meta:
        ordering = ['order']

class ProjectPageContent(models.Model):
    """
    A singleton model to store the overview/impact text for the main projects list page.
    (Req 1 & 4)
    """
    project_overview = models.TextField(
        help_text="Introduction for the main 'Our Projects' page.", 
        blank=True)
    
    impact_section = models.TextField(
        help_text="Text for the main 'Impact Section' (Req 4).", 
        blank=True)

    def __str__(self):
        return "Projects Page Content"

    class Meta:
        verbose_name = "Projects Page Content"
        verbose_name_plural = "Projects Page Content"