from django.shortcuts import render
from django.http import JsonResponse
from django.core import serializers

from .models import *

# Create your views here.


def view(request):
    
    students = Student.objects.all()
    students_json = serializers.serialize('json', students)
    context = {'students_json': students_json}
    return render(request, 'pages/view.html', context)


def update_student_status(request):
    if request.method == 'POST':
        student_id = request.POST.get('student_id')
        new_status = request.POST.get('new_status')
        student = Student.objects.get(id=student_id)
        student.student_status = new_status
        student.save()
        response_data = {'success': True}
        return JsonResponse(response_data)
    else:
        response_data = {'success': False}
        return JsonResponse(response_data)


def home(request):
    return render(request, 'pages/homepage.html')


def index(request):
    return render(request, 'pages/index.html')
