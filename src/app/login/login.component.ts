import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { ApiService } from '../api.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  admin=false;
  constructor(private apiService:ApiService, private router:Router) { }
userArray;

  ngOnInit() {
    this.apiService.getUser().subscribe(res=> this.userArray=res );

  }
  onLogin(email:HTMLInputElement,password:HTMLInputElement)
  {
    if(email.value=="" || password.value=="")
    {
      alert("Please Enter all the fields");
    }
    else
    {
      let flag=false;
      for(let i of this.userArray)
    {
      if((i.email==email.value)&&(i.password==password.value))
      {
        alert("login sucessful");
        flag=true;
       this.apiService.loggedIn=true;
        this.router.navigate(['/home/'+ i.user_Id]);
        
      }
    }
     if(flag== false)
      {
        alert("Please Enter correct details.");

    }
   
  }

  }
}
