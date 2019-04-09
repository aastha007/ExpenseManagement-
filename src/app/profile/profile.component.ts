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
  IAmount = 0;
  EAmount = 0;
  UserBalance = 0;
 
  Idisplay=false;
  Edisplay=false;

  constructor(private apiservice: ApiService, private route: ActivatedRoute) {
    this.id = this.route.snapshot.params.id;
  }

  Income = { User_Id: 1, date: "", income_category: "", amount: "", description: "" };
  Expense = { User_Id: 1, date: "", expense_category: "", amount: "", description: "" };

  ngOnInit() {

    this.apiservice.getUserIncome(this.id).subscribe(
      res => {
        this.IncomeArray = res;
        for (let i of this.IncomeArray) {
          this.IAmount += i.amount;
        }
      
    this.apiservice.getUserExpense(this.id).subscribe(res => {
      this.ExpenseArray = res;
      for (let i of this.ExpenseArray) {
        this.EAmount += i.amount;
      }
      
    this.UserBalance = this.IAmount - this.EAmount;

    }
    );
  }
  );

  }
  AddExpense(ExpenseDate: HTMLInputElement, ExpenseAmount: HTMLInputElement, ExpenseDescription: HTMLInputElement, TypeOfExpense: HTMLSelectElement) {
    if (ExpenseAmount.value == "" || ExpenseDate.value == "" || ExpenseDescription.value == "" || TypeOfExpense.value == "") {
      alert("Please Enter All The Fields!");
    }
    else {
      this.Expense.User_Id = this.id;
      this.Expense.date = ExpenseDate.value;
      this.Expense.amount = ExpenseAmount.value;
      this.Expense.description = ExpenseDescription.value;
      this.Expense.expense_category = TypeOfExpense.value;
      console.log("add function running");
      this.apiservice.postExpense(this.Expense);
      ExpenseDate.value="";
      ExpenseAmount.value="";
      ExpenseDescription.value="";
      TypeOfExpense.value="";
      alert("Expense Added.");
      this.Edisplay=false;
    }
  }
  AddIncome(IncomeDate: HTMLInputElement, IncomeAmount: HTMLInputElement, IncomeDescription: HTMLInputElement, TypeOfIncome: HTMLSelectElement) 
  {
    if (IncomeAmount.value == "" || IncomeDate.value == "" || IncomeDescription.value == "" || TypeOfIncome.value == "") {
      alert("Please Enter All The Fields!");
    }
    else {
      this.Income.User_Id = this.id;
      this.Income.date = IncomeDate.value;
      this.Income.amount = IncomeAmount.value;
      this.Income.description = IncomeDescription.value;
      this.Income.income_category = TypeOfIncome.value;
      console.log("add function running");
      this.apiservice.postIncome(this.Income);
      IncomeDate.value="";
      IncomeAmount.value="";
      IncomeDescription.value="";
      TypeOfIncome.value="";
      alert("Income Added");
      this.Idisplay=false;

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
