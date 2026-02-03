from django.http import HttpResponse
from django.shortcuts import render # <--- Import this

# demo
def hello_world(request):
    # return HttpResponse("Hello World")
    print(request.method)
    return render(request, 'App/hello.html',{"name": "saroj"})

# Create your views here.
