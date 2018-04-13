import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './HomeComponent/home.component';
import { LoginComponent } from './LoginComponent/login.component';
import { CreateAcctComponentComponent } from './create-acct-component/create-acct-component.component';
import { Component } from '@angular/core/src/metadata/directives';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path:'create-acct-component',
    component: CreateAcctComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
