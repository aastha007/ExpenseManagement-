import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { ActivatedRoute , Params} from '@angular/router';


@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  id;
  currentUser;

  constructor(private apiService:ApiService, private activatedRoute:ActivatedRoute) {
    // this.activatedRoute.params.subscribe((params:Params)=> {
    //   this.id=Number(params.id);
   // });
   
   }

  ngOnInit() {
    

  }

}
