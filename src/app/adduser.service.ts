import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdduserService {

  constructor() { }
  users=[{firstName:"aastha", lastName:"kansal", email:"aastha7195@gmail.com",password:"12345678"},
{firstName:"aastha", lastName:"kansal", email:"aastha7195@gmail.com",password:"87654321"}];
  loggedIn={email:"aastha7195@gmail.com",password:"12345678"};
 
  addUser(firstName:string,lastName:string, email:string, password:string){
  
    this.users.push({firstName:firstName, lastName:lastName, email:email,password:password});
    alert("user added");
  }
}
