import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from './user.service';
import { AuthService } from './auth.service';
import { RegisterComponent } from './register/register.component';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot()
  ],
  exports: [],
  declarations: [LoginComponent, RegisterComponent, UserComponent],
  providers: [
    UserService,
    AuthService
  ]
})
export class UserModule { }
