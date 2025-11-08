from django.urls import path
from .views import AboutPageContentView, TeamMemberListView

urlpatterns = [
    path('content/', AboutPageContentView.as_view(), name='about-content'),
    path('team/', TeamMemberListView.as_view(), name='team-list'),
]