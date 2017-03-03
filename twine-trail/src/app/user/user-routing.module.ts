import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const userRoutes: Routes = [
	{ path: 'user/login', component: LoginComponent },
	{ path: 'user/register', component: RegisterComponent }
];

@NgModule({
	imports: [RouterModule.forChild(userRoutes)],
	exports: [RouterModule]
})

export class UserRoutingModule {}