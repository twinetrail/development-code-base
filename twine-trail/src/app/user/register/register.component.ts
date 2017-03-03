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
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css', '../user.component.css']
})
export class RegisterComponent implements OnInit {
	registerForm: FormGroup;
	successAlert: boolean = false;
  errorAlert: boolean = false;

  constructor(
  	private fb: FormBuilder,
  	private userService: UserService,
  	private router: Router
  	) { }

  ngOnInit() {
  	this.buildForm();
  }

  buildForm(){
  	this.registerForm = this.fb.group({
  		username: ['',[Validators.required]],
  		email: ['',[Validators.required]],
  		password: ['',[Validators.required]],
  		firstname: ['',[Validators.required]],
  		lastname: [''],
  		industry: ['',[Validators.required]],
  		storeType: ['',[Validators.required]],
  		cellNumber: [''],
  		landline: [''],
  	});
  }

  onRegister(){
  	let user: User = new User;
    let formValue = this.registerForm.value;
    user.username = formValue.username;
    user.email = formValue.email;
    user.password = formValue.password;
    user.first_name = formValue.firstname;
    user.last_name = formValue.lastname;
    user.industry = formValue.industry;
    user.store_type = formValue.storeType;
    user.mobile = formValue.cellNumber;
    user.landline = formValue.landline;
  	console.log(user);
  	this.userService.registerUser(user).subscribe(response => {
  		swal("Registration Successful");
  		this.successAlert = true;
      this.errorAlert = false;
  		this.router.navigate(['/user/login']);
  	}, err =>{
  		this.errorAlert = true;
      this.successAlert = false;
  		console.log(err);
  	})
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
