from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
from django.db.models import Q
from .models import Student


def get_student_data(request):
    student_id = request.GET.get('student_id')
    try:
        student = Student.objects.get(id=student_id)
        # Prepare the data to be sent back to the client
        data = {
            'student_id': student.student_id,
            'student_status': student.student_status,
            'student_name': student.student_first_name,
        }
        return JsonResponse(data)
    except Student.DoesNotExist:
        return JsonResponse({'error': 'Student not found'})


def search(request):
    search = Student.objects.all()
    name = None
    if 'search_name' in request.GET:
        name = request.GET.get('search_name')

    if name:
        delimiter = " "
        if delimiter in name:
            result = name.split(delimiter)
            first_name = result[0]
            last_name = result[1]
            search = search.filter(
                student_first_name__icontains=first_name, student_last_name__icontains=last_name)
        else:
            search = search.filter(Q(student_first_name__icontains=name))

    context = {'students': search}
    return render(request, 'pages/search.html', context)


def delete_student(request):
    if request.method == 'POST':
        student_id = request.POST.get('student_id')
        if student_id:
            student = Student.objects.get(id=student_id)
            student.delete()
    return redirect('search')


def edit_student(request, studentID):
    student = Student.objects.get(student_id=studentID)
    context = {'student': student}
    if request.method == 'POST':
        address = request.POST.get('address')
        phone = request.POST.get('phone')
        email = request.POST.get('email')
        level = int(request.POST.get('level'))
        gpa = float(request.POST.get('gpa'))
        status = request.POST.get('status')
        if status == 'on':
            status = 'active'
        else:
            status = 'inactive'
        department = request.POST.get('dep')
        landline = request.POST.get('landline')

        student.student_address = address
        student.student_phone = phone
        student.student_email = email
        student.student_dep = department
        student.student_landline = landline
        student.student_status = status
        student.student_gpa = gpa
        student.student_level = level
        student.save()
        return redirect('search')
    return render(request, 'pages/edit_student.html', context)


def edit_department(request, studentID):
    student = Student.objects.get(student_id=studentID)
    context = {'student': student}
    if request.method == 'POST':
        department = request.POST.get('Department')
        student.student_dep = department
        student.save()
        return redirect('edit_student', studentID)

    return render(request, 'pages/edit_department.html', context)


def view(request):
    context = {'students': Student.objects.all()}
    return render(request, 'pages/view.html', context)


def home(request):
    return render(request, 'pages/homepage.html')


def index(request):
    return render(request, 'pages/index.html')


@csrf_exempt
def update_student_status(request):
    if request.method == 'POST':
        student_id = request.POST.get('student_id')
        new_status = request.POST.get('new_status')

        # retrieve the student record from the database
        student = Student.objects.get(id=student_id)

        # update the student status field and save the record
        student.student_status = new_status
        student.save()

        # return a successresponse in JSON format
        return JsonResponse({'status': 'success'})
