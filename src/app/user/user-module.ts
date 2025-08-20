import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing-module';
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {IonContent} from "@ionic/angular/standalone";


@NgModule({
  declarations: [
    //declaromos lo s componentes que perteneecen a este modulo
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    IonContent
  ]
})
export class UserModule { }
