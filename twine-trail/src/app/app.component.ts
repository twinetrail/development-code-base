import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'keep Twining!';

  constructor(private apiService: AppService){}

  ngOnInit(){
  	// this.callRequest();
  }

  callRequest(): void{

  	this.apiService.getRequest().subscribe(response => console.log("the response is " + response[0].first_name));
  }
}

