import { Component, OnInit } from '@angular/core';
import { ElementFinder } from 'protractor';
import { ApiService } from '../api.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {

  constructor(private apiservice:ApiService, private route:ActivatedRoute) { 
     this.id = this.route.snapshot.params.id;
  }

  id;
  expense=false;
  income=false;
  ExpenseArray;
  IncomeArray;
  newE;
  newI;

  ngOnInit() {
    this.apiservice.getUserIncome(this.id).subscribe(
      res => {
        this.newI = res;
        this.IncomeArray = res;
      }
    );
    this.apiservice.getUserExpense(this.id).subscribe(res => {
      this.newE = res;
      this.ExpenseArray = res;
    }
    );
    
  }
  Onselection(selectedValue:HTMLSelectElement, startDate:HTMLInputElement, endDate:HTMLInputElement )
  {
    console.log(startDate.value);
    console.log(endDate.value);
    if(selectedValue.value=="Expense")
    {

      this.ExpenseArray = [];
      
   for (let i of this.newE) {
    if((i.date>=startDate.value)&&(i.date<=endDate.value))
    {
      console.log(i);
      this.ExpenseArray.push(i);
      
    }
   }   
   this.expense=true;
      this.income=false;
    }
    else if(selectedValue.value=="Income")
    {
      this.IncomeArray = [];
   for (let i of this.newI) {
    if((i.date>startDate.value)&&(i.date<endDate.value))
    {
      console.log(i);
      this.IncomeArray.push(i);
    }
   }
      this.income=true;
      this.expense=false; 

    }
    else{
      this.income=false;
      this.expense=false;

    }

  }
  OnDeleteExpense(eid:number){
    this.apiservice.DeleteExpense(eid).subscribe(res => {
      this.ExpenseArray=res;
      this.apiservice.getUserExpense(this.id).subscribe((e=[])=>this.ExpenseArray=e);
    });//id is product id
    
  }
  OnDeleteIncome(Iid:number){
    this.apiservice.DeleteIncome(Iid).subscribe(res => {
      this.IncomeArray=res;
      this.apiservice.getUserIncome(this.id).subscribe((e=[])=>this.IncomeArray=e);
    });
  }

}
