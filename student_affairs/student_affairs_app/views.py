from django.shortcuts import render
from django.db.models import Q
from .models import Student

def search(request):
    search = Student.objects.all()
    name = request.GET.get('search_name')

    if name:
        delimiter = " "
        if delimiter in name:
            result = name.split(delimiter)
            first_name = result[0]
            last_name = result[1]
            search = search.filter(student_first_name__icontains=first_name, student_last_name__icontains=last_name)
        else:
            search = search.filter(Q(student_first_name__icontains=name) | Q(student_last_name__icontains=name))

    context = {'students': search}
    return render(request, 'pages/search.html', context)

           
            

def view(request):
    context = {'students': Student.objects.all()}
    return render(request, 'pages/view.html', context)

def home(request):
    return render(request, 'pages/homepage.html')

def index(request):
    return render(request, 'pages/index.html')

