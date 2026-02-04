from django.urls import path
from . import views #(.) means current directory bata sabai file haru import garne milcha

app_name = 'studentdashboard'

urlpatterns = [
    path('', views.home, name='home'),
    
]