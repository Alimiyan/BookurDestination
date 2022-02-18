from django.shortcuts import render
from django.http import HttpResponse
from .models import Destination

# Create your views here.
def home(request):
    dest1 = Destination()
    dest1.name = 'Mumbai'
    dest1.desc = "The city that never sleeps"
    dest1.img = 'portfolio-1.jpg'
    dest1.price = 300
    dest1.offer = True

    dest2 = Destination()
    dest2.name = 'Delhi'
    dest2.desc = "The National Capital Territory"
    dest2.img = 'portfolio-2.jpg'
    dest2.price = 500
    dest2.offer = False

    dest3 = Destination()
    dest3.name = 'Kerala'
    dest3.desc = "The city of God"
    dest3.img = 'portfolio-3.jpg'
    dest3.price = 700
    dest3.offer = False

    dests = [
        dest1, dest2, dest3
    ]
    
    return render(request, 'index.html',{'dests': dests})