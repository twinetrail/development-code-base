import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UserModule } from './user/user.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MaterialModule } from '@angular/material';
import { AppRoutingModule } from './app-routing.module';
import { AppService } from './app.service';

import { AppComponent } from './app.component';
import 'hammerjs';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    UserModule,
    AppRoutingModule,
    NgbModule.forRoot(),
    MaterialModule.forRoot()
  ],
  providers: [ AppService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
