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

  
  getIncomeAll(){
    return this.http.get('http://localhost:52198/api/incomecategory');
  }
  getUserIncome(startDate, endDate){
    return this.http.get("http://localhost:52198/api/incomecategory/" + startDate.value + "/" + endDate.value);
  }
  getUserIncomeAmount(id) {
    return this.http.get('http://localhost:52198/api/incomecategory/' + id);
  }
  getUserExpenseAmount(id) {
    return this.http.get('http://localhost:52198/api/expensecategory/' + id);
  }
  getExpenseAll(){
    return this.http.get('http://localhost:52198/api/expensecategory');
  }
  getUserExpense(startDate, endDate){
    return this.http.get("http://localhost:52198/api/expensecategory/" + startDate.value + "/" + endDate.value);
  }
  
  postExpense(Expense){
    return this.http.post('http://localhost:52198/api/expensecategory',Expense);
  }
  
  postIncome(Income){
    return this.http.post('http://localhost:52198/api/incomecategory',Income);
  }
  addUser(user){
    return this.http.post('http://localhost:52198/api/user',user);
  }
  DeleteIncome(id){
    return this.http.delete(`http://localhost:52198/api/incomecategory/${id}`);
  }
  DeleteExpense(id)
  {
    return this.http.delete(`http://localhost:52198/api/expensecategory/${id}`);
  }


}
