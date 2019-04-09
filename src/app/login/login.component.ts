import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin=false;
  constructor(private apiService:ApiService, private router:Router, private authService: AuthService) { }

userArray;

  ngOnInit() {
    

  }
  onLogin(username: HTMLInputElement, email,  password:HTMLInputElement)
  {
    const cred = {
      UserName: username.value,
      Email: email.value,
      Password: password.value
    }

    this.authService.login(cred);
  }
}
