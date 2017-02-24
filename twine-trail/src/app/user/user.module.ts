import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from './user.service';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot()
  ],
  exports: [LoginComponent],
  declarations: [LoginComponent],
  providers: [UserService]
})
export class UserModule { }
