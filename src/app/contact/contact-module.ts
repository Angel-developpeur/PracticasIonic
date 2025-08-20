import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactRoutingModule } from './contact-routing-module';
import {FormContactComponent} from "./pages/form-contact/form-contact.component";
import {ContactComponent} from "./pages/contact/contact.component";
import {IonContent} from "@ionic/angular/standalone";
import {SharedModule} from "../shared/shared-module";


@NgModule({
  //se declaran sus componentes
  declarations: [
    FormContactComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,
    ContactRoutingModule,
    SharedModule, //modulo que contiene los componentes de header y footes
    IonContent,
  ]
})
export class ContactModule { }
