from django.shortcuts import render,redirect
from django.contrib.auth.models import User,auth

# Create your views here.
def register(request):
    if request.method == 'POST':
        first_name = request.POST['first-name']
        last_name = request.POST['last-name']
        username = request.POST['username']
        email = request.POST['email']
        password1 = request.POST['password1']
        password2 = request.POST['password2']
        #print(request.POST['first-name'])

        #checking whether two passwords match
        if password1==password2:
            if User.objects.filter(username = username).exists():
                print('username already taken')
            elif User.objects.filter(email = email).exists():
                print('email already taken')
            else:
                user = User.objects.create_user(
                    username = username,
                    password = password1,
                    email = email,
                    first_name = first_name,
                    last_name = last_name
                )

                user.save();
                print('user created')
        else:
            print('password dont match')
        return redirect('/')
    else:
        return render(request, 'register.html')
