from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

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
     path('add_student',views.add_student,name='add_student'),
    path('get-student-data/', views.get_student_data, name='get_student_data'),
    path('update-student-status/', views.update_student_status,
         name='update_student_status'),
    
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
