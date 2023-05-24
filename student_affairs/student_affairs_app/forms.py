from django import forms 
from .models import *


class add_student_form(forms.ModelForm):
    class Meta:
        model=Student
        fields=['student_dob','student_landline','student_naitonal_id','student_status','student_gender','student_dep','student_gpa','student_level','student_email','student_phone','student_address','student_last_name','student_id','student_first_name']