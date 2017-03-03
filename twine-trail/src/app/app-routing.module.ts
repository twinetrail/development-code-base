import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';

export const appRoutes: Routes = [
	{ path: 'welcome', component: WelcomeComponent },
	{ path: '', redirectTo: '/welcome', pathMatch: 'full' }
];
@NgModule({
	imports: [RouterModule.forRoot(appRoutes)],
	exports: [RouterModule]
})

export class AppRoutingModule {}