import React from "react";
// import { Image, Stack, Button } from "react-bootstrap";
import { TypeAnimation } from "react-type-animation";


const Diango_registration_system = () => {
  const [hover, setHover] = React.useState(false);
  return (
    <div>
      <section className="dark">
  <div className="container py-4">
    <h1 className="h1 text-center" id="pageHeaderTitle">
      有點久沒寫Django，來寫個最簡單的註冊系統吧
    </h1>
    <article className="blog dark blue">
      <div className="blog__text">
        <h1 className="blog__title blue">
          有點久沒寫Django，來寫個最簡單的註冊系統吧
        </h1>
        <div className="blog__subtitle small">
          <time dateTime="2023-01-20 20:05">
            <i className="fas fa-calendar-alt mr-2" /> — 20/01/2023 20:05
          </time>
        </div>
        <div className="blog__bar" />
        <div className="blog__preview-txt">
          <p>forms.py</p>
          <pre>
            <code className="language-python">
              {"\n"}
              {"   "}from django import forms{"\n"}
              {"   "}from django.contrib.auth.models import User{"\n"}
              {"   "}from django.contrib.auth.forms import UserCreationForm
              {"\n"}
              {"                                   "}
              {"\n"}
              {"   "}class UserRegistrationForm(UserCreationForm):{"\n"}
              {"       "}email = forms.EmailField(){"\n"}
              {"                                       "}
              {"\n"}
              {"       "}class Meta:{"\n"}
              {"           "}model = User{"\n"}
              {"           "}fields = ['username', 'email', 'password1',
              'password2']{"\n"}
              {"        "}
              {"\n"}
              {"        "}
            </code>
          </pre>
          <p>views.py</p>
          <pre>
            <code className="language-python">
              {"\n"}
              {"   "}from django.contrib import auth{"\n"}
              {"   "}from django.http import HttpResponse{"\n"}
              {"   "}from .forms import UserRegistrationForm{"\n"}
              {"   "}from django.contrib.auth import authenticate{"\n"}
              {"   "}from django.shortcuts import render, redirect{"\n"}
              {"   "}
              {"\n"}
              {"   "}def register(request):{"\n"}
              {"       "}if request.method == 'POST':{"\n"}
              {"           "}form = UserRegistrationForm(request.POST){"\n"}
              {"           "}if form.is_valid():{"\n"}
              {"               "}form.save(){"\n"}
              {"               "}return redirect('login'){"\n"}
              {"       "}else:{"\n"}
              {"           "}form = UserRegistrationForm(){"\n"}
              {"       "}return render(request, 'register.html', {"{"}'form':
              form{"}"}){"\n"}
              {"   "}
              {"\n"}
              {"   "}def login(request):{"\n"}
              {"       "}if request.method == 'POST':{"\n"}
              {"           "}username = request.POST['username']{"\n"}
              {"           "}password = request.POST['password']{"\n"}
              {"           "}user = authenticate(username=username,
              password=password){"\n"}
              {"           "}if user is not None:{"\n"}
              {"               "}if user.is_active:{"\n"}
              {"                   "}auth.login(request, user){"\n"}
              {"                   "}return redirect('profile'){"\n"}
              {"       "}return render(request, 'login.html'){"\n"}
              {"   "}
              {"\n"}
              {"   "}def profile(request):{"\n"}
              {"       "}return render(request, 'profile.html'){"\n"}
              {"    "}
              {"\n"}
              {"    "}
            </code>
          </pre>
          <p>urls.py</p>
          <pre>
            <code className="language-python">
              {"\n"}
              {"   "}from app import views{"\n"}
              {"   "}from django.urls import path{"\n"}
              {"   "}from django.contrib import admin{"\n"}
              {"   "}
              {"\n"}
              {"   "}urlpatterns = [{"\n"}
              {"       "}path('admin/', admin.site.urls),{"\n"}
              {"       "}path('register/', views.register, name='register'),
              {"\n"}
              {"       "}path('login/', views.login, name='login'),{"\n"}
              {"       "}path('profile/', views.profile, name='profile'){"\n"}
              {"   "}]{"\n"}
              {"\n"}
            </code>
          </pre>
          <p>
            1. 新建register.html, login.html, profile.html
            <br />
            <br />
            2. 並在&lt;input&gt;中的name的值必須是 'username', 'email','password1', 'password2'，或是可以使用Django內建的Template{" "}
              {"{"}
              {"{"} form.as_p {"}"}
              {"}"}
            來完成register所有的&lt;input&gt;和submit button
            <br />
            <br />
            3. 最後別忘了在HTML加上
              {"{"}% csrf_token %{"}"}
            <br />
            可以在Django的管理員頁面127.0.0.1/admin中，看到註冊用戶的username和email
          </p>
        </div>
      </div>
    </article>
    <a rel="license" href="http://creativecommons.org/licenses/by-nc/2.0/">
      <img
        alt="Creative Commons License"
        style={{ borderWidth: 0 }}
        src="https://i.creativecommons.org/l/by-nc/2.0/88x31.png"
      />
    </a>
    <br />
    This work is licensed under a{" "}
    <a rel="license" href="http://creativecommons.org/licenses/by-nc/2.0/">
      Creative Commons Attribution-NonCommercial 2.0 Generic License
    </a>
    .
  </div>
</section>


<br></br><br></br><br></br><br></br>
      <hr className="hr"></hr>
        <footer>
  <div className="container footer">
    <div className="row">
      <div className="col-md-4 text-left">
        <p className="p">
          {"{"}My-IT{"}"}程式討論區
        </p>
        <p>
          {"{"}My-IT{"}"}▸ 一個程式討論群組
        </p>
        <p>果然是我熟悉的myit 還是那麼的不營養</p>
        <p>
          © {"{"}My-IT{"}"}程式討論區 2021-2024
        </p>
      </div>
      <div className="col-md-4 text-right">
        <h4>連結</h4>
        <ul>
          <li>
            <a href="/" target={'_blank'}>主頁</a>
          </li>
          <li>
            <a href="https://discord.gg/U3DW4cNkMd" target={'_blank'}>加入Discord</a>
          </li>
        </ul>
        <ul>
        <li>
            <a href="/aboutus" target={'_blank'}>關於我們</a>
          </li>
          <li>
            <a href="https://github.com/My-IT-discord/myit_react" target={'_blank'}>Github原代碼</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
<br></br><br></br>
      
        

      </div>
  );
};
export default Diango_registration_system;
