from django.urls import path
from . import views #(.) means current directory bata sabai file haru import garne milcha

app_name = 'studentdashboard'

urlpatterns = [
    # path('', views.home, name='home'),# root url ma jancha
# '' means root url ma jancha
# views.home means views.py file ko home function call garne
# name='home' means yo url ko name home ho vanera define gareko ho
    path('dashboard/', views.student_dashboard, name='student_dashboard'),
    
]
