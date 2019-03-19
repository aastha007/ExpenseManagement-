import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }
  Expense={date:"",type:"", amount:"", description:""};
Income ={date:"",type:"", amount:"", description:""};
//User={}
loggedIn=false;
  getUser(){
     return this.http.get('http://localhost:52198/api/user');
  }
  getIncomeAll(){
    return this.http.get('http://localhost:52198/api/incomecategory');
  }
  getUserIncome(id){
    return this.http.get(`http://localhost:52198/api/incomecategory/${id}`);
  }
  getExpenseAll(){
    return this.http.get('http://localhost:52198/api/expensecategory');
  }
  getUserExpense(id){
    return this.http.get(`http://localhost:52198/api/expensecategory/${id}`);
  }
  
  postExpense(Expense){
    
    return this.http.post('http://localhost:52198/api/expensecategory',Expense).subscribe(res=>{console.log(res)});
  }
  postIncome(Income){
    
    return this.http.post('http://localhost:52198/api/incomecategory',Income).subscribe(res=>{console.log(res)});
  }
  addUser(user){
    return this.http.post('http://localhost:52198/api/user',user).subscribe(res=>{console.log(res)});
  }
  DeleteIncome(id){
    return this.http.delete(`http://localhost:52198/api/incomecategory/${id}`);
  }
  DeleteExpense(id)
  {
    return this.http.delete(`http://localhost:52198/api/expensecategory/${id}`);
  }
}
