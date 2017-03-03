import { Component, OnInit } from '@angular/core';

import { AppService } from './app.service';
import { AuthService } from './user/auth.service';
import { UserService } from './user/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  
})
export class AppComponent implements OnInit {
  title = 'keep Twining!';

  constructor(
    private apiService: AppService, 
    private authService: AuthService,
    private userService: UserService,
    private router: Router
    ){}

  ngOnInit(){
  	// this.callRequest();
  }

  logout(){
    this.userService.logout().subscribe(res => console.log(res), err => console.log(err));
    this.authService.logout();
    this.router.navigate(['/welcome']);
  }

  callRequest(): void{

  	this.apiService.getRequest().subscribe(response => console.log("the response is " + response[0].first_name));
  }
}

