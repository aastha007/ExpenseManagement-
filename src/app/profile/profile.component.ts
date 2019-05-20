import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  ExpenseArray;
  IncomeArray;
  id;
  IAmount;
  EAmount;
  UserBalance;
 
  Idisplay=false;
  Edisplay=false;

  constructor(private apiservice: ApiService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }


  ngOnInit() {
    this.getBalance();
  }

  getBalance() {
    this.apiservice.getUserIncomeAmount(this.id).subscribe(
      res => {
        this.IAmount = res;
        this.apiservice.getUserExpenseAmount(this.id).subscribe(res => {
           this.EAmount = res;
           this.UserBalance = this.IAmount - this.EAmount;
        });
    }
    );
  }

  AddExpense(ExpenseDate: HTMLInputElement, ExpenseAmount: HTMLInputElement, ExpenseDescription: HTMLInputElement, TypeOfExpense: HTMLSelectElement) 
  {
    
      var Expense = {
          User_Id : this.id,
          Date : ExpenseDate.value,
          Amount : Number(ExpenseAmount.value),
          Description : ExpenseDescription.value,
          Expense_Category : TypeOfExpense.value
      }

      this.apiservice.postExpense(Expense).subscribe( 
        (e)=> { 
          console.log();
          this.getBalance();
        } 
      );

     
    
  }

  AddIncome(IncomeDate: HTMLInputElement, IncomeAmount: HTMLInputElement, IncomeDescription: HTMLInputElement, TypeOfIncome: HTMLSelectElement) 
  {
    if (IncomeAmount.value == "" || IncomeDate.value == "" || IncomeDescription.value == "" || TypeOfIncome.value == "") {
      alert("Please Enter All The Fields!");
    }
    else {
      var Income = {
        User_Id : this.id,
        Date : IncomeDate.value,
        Amount : Number(IncomeAmount.value),
        Description : IncomeDescription.value,
        Income_Category : TypeOfIncome.value
    }

      this.apiservice.postIncome(Income).subscribe( 
        (e)=> { 
          console.log();
          this.getBalance();
        } 
      );


    }
  }
  toggleExpense(){
    this.Edisplay=!this.Edisplay; 
    this.Idisplay=false;
  }
  toggleIncome(){
    this.Idisplay=!this.Idisplay;
    this.Edisplay=false;
  }
}
