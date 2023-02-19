# 有點久沒寫Django，來寫個最簡單的註冊系統吧

20/01/2023 20:05

forms.py

```python
from django import forms
from django.contrib.auth.models import User
from django.contrib.auth.forms import UserCreationForm
                                
class UserRegistrationForm(UserCreationForm):
    email = forms.EmailField()
                                    
    class Meta:
        model = User
        fields = ['username', 'email', 'password1', 'password2'] 
```
views.py

```python
from django.contrib import auth
from django.http import HttpResponse
from .forms import UserRegistrationForm
from django.contrib.auth import authenticate
from django.shortcuts import render, redirect

def register(request):
    if request.method == 'POST':
        form = UserRegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            return redirect('login')
    else:
        form = UserRegistrationForm()
    return render(request, 'register.html', {'form': form})

def login(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            if user.is_active:
                auth.login(request, user)
                return redirect('profile')
    return render(request, 'login.html')

def profile(request):
    return render(request, 'profile.html')
```
urls.py

```python
from app import views
from django.urls import path
from django.contrib import admin

urlpatterns = [
    path('admin/', admin.site.urls),
    path('register/', views.register, name='register'),
    path('login/', views.login, name='login'),
    path('profile/', views.profile, name='profile')
]
```
1. 新建register.html, login.html, profile.html

2. 並在<input>中的name的值必須是 'username', 'email', 'password1', 'password2'，或是可以使用Django內建的Template {{ form.as_p }}來完成register所有的<input>和submit button

3. 最後別忘了在HTML加上{% csrf_token %}
可以在Django的管理員頁面127.0.0.1/admin中，看到註冊用戶的username和email