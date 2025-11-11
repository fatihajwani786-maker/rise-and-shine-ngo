from django.urls import path
from .views import ProjectListView, ProjectDetailView, ProjectPageContentView

urlpatterns = [
    # e.g., /api/projects/
    path('', ProjectListView.as_view(), name='project-list'),

    # e.g., /api/projects/page-content/
    path('page-content/', ProjectPageContentView.as_view(), name='project-page-content'),

    # e.g., /api/projects/1/ (the 'int:pk' captures the ID)
    path('<int:pk>/', ProjectDetailView.as_view(), name='project-detail'),
]