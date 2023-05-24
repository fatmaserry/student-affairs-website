from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('index', views.index, name='index'),
    path('index/', views.index, name='index'),
    path('view', views.view, name='view'),
    path('search/', views.search, name='search'),
    path('index/search/', views.search, name='search'),
    path('view', views.search, name='view'),
    path('<int:studentID>', views.edit_student, name='edit_student'),
    path('delete-student/', views.delete_student, name='delete_student'),
    # path('<int:studentID>', views.edit_department, name='edit_department')
]
