import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private apiuser:ApiService, private router:Router, private authservice: AuthService) { }

  ngOnInit() {
  }
  
  validateForm(username:HTMLInputElement,
    email:HTMLInputElement,
    password:HTMLInputElement,
    confirmPassword:HTMLInputElement)
    {
   
    if(username.value=="" || email.value==="" || password.value==="" )
    {
      alert("Please enter all the fields");
    }
    else if(confirmPassword.value!=password.value)
    {
      alert("Passwords Do Not Match!");
      confirmPassword.value="";
      password.value="";
    }
    else if(password.value.length<8)
    {
      alert("Password too short! Minimun 8 Characters required!");
    }
    else {

      const user = {
        UserName: username.value,
        Email: email.value,
        Password: password.value
      }


      this.authservice.register(user);
        this.router.navigate(['/login']);
    }

  }

}
