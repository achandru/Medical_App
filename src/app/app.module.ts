import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './HomeComponent/home.component';
import { LoginComponent } from './LoginComponent/login.component';
import { CreateAcctComponentComponent } from './create-acct-component/create-acct-component.component';
import { BookDoctorComponent } from './book-doctor/book-doctor.component';
import { SigninComponent } from './signin/signin.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    CreateAcctComponentComponent,
    BookDoctorComponent,
    SigninComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
