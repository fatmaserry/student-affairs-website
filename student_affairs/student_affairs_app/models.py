from django.db import models
from django.core.validators import MaxValueValidator

# Create your models here.


class Student(models.Model):
    def __str__(self):
        return str(self.student_id)

    department = [
        ('General', 'general'),
        ('Computer science', 'computer Science'),
        ('Information system', 'information System'),
        ('Internet technology', 'internet Technology'),
        ('Artificial Intelligence', 'artificial intelligence'),
        ('Decision Support', 'decision support'),
    ]

    status = [
        ('Active', 'active'),
        ('Inactive', 'inactive'),
    ]

    gender = [
        ('Male', 'male'),
        ('Female', 'female'),
    ]

    student_first_name = models.CharField(max_length=50)
    student_id = models.IntegerField(
        validators=[MaxValueValidator(99999999)], unique=True)
    student_last_name = models.CharField(max_length=50)
    student_address = models.CharField(max_length=500)
    student_phone = models.CharField(max_length=11, unique=True)
    student_email = models.CharField(max_length=50, unique=True)
    # don't forget to edit the int values#########
    student_level = models.IntegerField(validators=[MaxValueValidator(4)])
    student_gpa = models.DecimalField(max_digits=3, decimal_places=2)
    student_dep = models.CharField(max_length=50, choices=department)
    student_gender = models.CharField(max_length=6, choices=gender)
    student_status = models.CharField(max_length=8, choices=status)
    student_naitonal_id = models.CharField(max_length=14, unique=True)
    student_landline = models.CharField(max_length=10, null=True, blank=True)
    # editable=false could be used
    student_dob = models.DateField(verbose_name='Date of Birth')


class Admin(models.Model):
    def __str__(self):
        return self.admin_username

    admin_username = models.CharField(max_length=20)
    admin_password = models.CharField(max_length=12)
