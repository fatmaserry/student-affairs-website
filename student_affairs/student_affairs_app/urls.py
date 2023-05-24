from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('index/', views.index, name='index'),
    path('view', views.view, name='view'),
    path('index/search/', views.search, name='search'),
    path('edit_student', views.edit_student, name='edit_student')
]
