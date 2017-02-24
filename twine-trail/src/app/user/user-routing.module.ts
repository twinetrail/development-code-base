import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

export const userRoutes: Routes = [
	{ path: 'user/login', component: LoginComponent }
];

@NgModule({
	imports: [RouterModule.forChild(userRoutes)],
	exports: [RouterModule]
})

export class UserRoutingModule {}