import { Input, Component, OnInit }   from '@angular/core';
import { 
  AbstractControl, Validators, 
  FormBuilder, FormGroup, FormControl 
}                                     from '@angular/forms';

import {User}                         from '../user';
import { UserService }                from '../user.service';
import { AuthService }                from '../auth.service';
import { 
  Router, Routes, 
  RouterModule 
}                                     from '@angular/router';
import swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css', '../user.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  successAlert: boolean = false;
  errorAlert: boolean = false;

  constructor(
    private fb: FormBuilder, 
    private userService: UserService, 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit() {
  	this.buildForm();
  }

  buildForm(): void{
  	this.loginForm = this.fb.group({
  		email: ['',[Validators.required]],
  		password: ['',[Validators.required]],
  	});
  }

  onLogin(): void{
    let userCredentials = this.loginForm.value;
    console.log(userCredentials);
    this.userService.loginUser(userCredentials.email,userCredentials.password).subscribe(response =>{
      let user: User = response.user;
      this.authService.setUser(user);
      this.authService.setToken(response.id);
      if(this.authService.getCurrentUser()){
        this.successAlert = true;
        this.errorAlert = false;
        this.router.navigate(['/welcome']);
      }

    }, err => {
      this.errorAlert = true;
      this.successAlert = false;
      console.log(err);
    });
  	// swal('Hello world!');
   
  }

  closeAlert(type: string): void{
  	if(type === 'success'){
      this.successAlert = false;
    }
    else{
      this.errorAlert = false;
    }
  }

}
