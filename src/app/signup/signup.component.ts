import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor( private apiuser:ApiService, private router:Router) { }

  ngOnInit() {
  }
  user={first_name:"", last_name:"", email:"",password:""};
  validateForm(firstName:HTMLInputElement,
    lastName:HTMLInputElement,
    email:HTMLInputElement,
    password:HTMLInputElement,
    confirmPassword:HTMLInputElement){
   // pattern='^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$';

  //    if(){}
  
    //else
    if(firstName.value=="" || lastName.value==="" || email.value==="" || password.value==="" )
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
        this.user.first_name=firstName.value;
        this.user.last_name=lastName.value; 
        this.user.email =email.value;
        this.user.password=password.value;
        console.log(this.user);
        this.apiuser.addUser(this.user);
        this.router.navigate(['/login']);
    }

  }

}
