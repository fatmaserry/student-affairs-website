from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('index/', views.index, name='index'),
    path('view', views.view, name='view'),
    path('search/', views.search, name='search'),
    path('index/search/', views.search, name='search'),
    path('view', views.search, name='view'),
    path('edit_student/<int:studentID>',
         views.edit_student, name='edit_student'),
    path('delete-student/', views.delete_student, name='delete_student'),
    path('edit_student/edit_department/<int:studentID>',
         views.edit_department, name='edit_department'),
    path('get-student-data/', views.get_student_data, name='get_student_data'),
    path('update-student-status/', views.update_student_status,
         name='update_student_status'),
]
