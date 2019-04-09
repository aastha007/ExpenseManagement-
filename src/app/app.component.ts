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
    if(this.authservice.isAuthenticated) {
      this.id = this.authservice.id;
    } else 
    this.id = "";
  }

}
