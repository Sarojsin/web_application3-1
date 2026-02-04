from django.shortcuts import render, redirect
from django.http import HttpResponse
from .models import StudentProfile
from django.http import JsonResponse
from django.contrib.auth.decorators import login_required  # <--- THE FIX


from django.contrib import messages


def student_dashboard(request):
    # Fetch all students and their related grades
    students = StudentProfile.objects.prefetch_related('grades').all()
    
    context = {
        'students': students,
        'student_count': students.count(),
    }
    return render(request, 'dashboard.html', context)