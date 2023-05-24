from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='home'),
    path('index/', views.index, name='index'),
    path('index/view', views.view, name='view'),
    path('index/search/', views.search, name='search'),
    path('search', views.search, name='search'),
    path('<int:studentID>', views.edit_student, name='edit_student'),
    # path('<int:studentID>', views.edit_department, name='edit_department')
]
