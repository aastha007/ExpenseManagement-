import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontendExManage';
  id;
  constructor(private authservice: AuthService) {
    if(localStorage.getItem('id')) {
      this.authservice.id = localStorage.getItem('id');
      this.id = localStorage.getItem('id');
    }   
    else 
      this.id = "";

  }

}
