import { Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLogIn;
  userId;
  token;
  userName
  lang
  type

  constructor(private router: Router) {
    if (localStorage.getItem('token')) {
      this.isLogIn = true
      this.init();
    }
    else {
      this.isLogIn = false;
    }
  }
  init() {
    this.userId = localStorage.getItem("userId");
    this.token = localStorage.getItem("token");
    this.userName = localStorage.getItem("userName");
    this.type = localStorage.getItem("type");
    this.lang = localStorage.getItem("lang");
  }

  isLogin() {
    return this.isLogIn;
  }

  getUserId() {
    return this.userId;
  }

  getToken() {
    return this.token;
  }

  getuserName() {
    return this.userName;
  }

  getType() {
    return this.type;
  }

  getLang() {
    return this.lang;
  }

  setLang(lang) {
    this.lang = lang;
    localStorage.setItem('lang', lang);
  }

  logIn(data) {
    this.isLogIn = true;
    this.logInLocalStorage(data);
    this.init();
  }

  logout() {
    this.logoutLocalStorage();
    this.router.navigateByUrl('/login')
  }

  logInLocalStorage(data) {
    // localStorage.setItem('userId', data.userId);
    localStorage.setItem('token',"Bearer "+  data.token);
    // localStorage.setItem('userName', data.user.username);
    // localStorage.setItem('type', data.user.type);
    // this.router.navigateByUrl('/').then(() => this.router.navigateByUrl('/'));
  }



  logoutLocalStorage() {
    localStorage.clear();
  }

}
