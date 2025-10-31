from django.contrib import admin
from .models import Post  # Import the Post model we just made

# Register your model with the admin site
admin.site.register(Post)