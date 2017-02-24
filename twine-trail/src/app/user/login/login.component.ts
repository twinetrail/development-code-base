import { Input, Component, OnInit } from '@angular/core';
import { AbstractControl, Validators, FormBuilder, FormGroup, FormControl } from '@angular/forms';

import {User} from '../user';
import { UserService } from '../user.service';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  user: User = new User();
  alert: boolean = false;

  constructor(public fb: FormBuilder, public userService: UserService) { }

  ngOnInit() {
  	this.buildForm();
  }

  buildForm(): void{
  	this.loginForm = this.fb.group({
  		email: ['',[Validators.required]],
  		password: ['',[Validators.required]],
  		rememberMe: ['']
  	});
  }

  onLogin(): void{
    let user = this.user;
    console.log(user);
    this.userService.loginUser(user.email,user.password).subscribe(response =>{
      console.log(response);
    });
  	// swal('Hello world!');
  	this.alert = true;
  }

  closeAlert(): void{
  	this.alert = false;
  }

}
