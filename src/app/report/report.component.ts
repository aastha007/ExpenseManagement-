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
  startDate;
  endDate;

  ngOnInit() {    
  }
  
  Onselection(selectedValue:HTMLSelectElement, startDate:HTMLInputElement, endDate:HTMLInputElement )
  {
    this.startDate = startDate;
    this.endDate = endDate;

    if(selectedValue.value == 'Expense') {
      this.income = false;
      this.expense = true;
    }
    else {
      this.expense = false;
      this.income = true;
    }
    this.apiservice.getUserExpense(startDate, endDate).subscribe(res => {
      this.ExpenseArray = res;
    });

    this.apiservice.getUserIncome(startDate, endDate).subscribe(res => {
      this.IncomeArray = res;
    });



  }
  OnDeleteExpense(eid:number) {
    this.apiservice.DeleteExpense(eid).subscribe(
      ()=>{
        this.apiservice.getUserExpense(this.startDate, this.endDate).subscribe(res => {
          this.ExpenseArray = res;
        });
      }
    );
    
  }

  OnDeleteIncome(Iid:number){
    this.apiservice.DeleteIncome(Iid).subscribe(
      ()=>{
        this.apiservice.getUserIncome(this.startDate, this.endDate).subscribe(res => {
          this.IncomeArray = res;
        });
      }
    );
    
  }

}
