import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreRoutingModule } from './store-routing-module';
import {ProductComponent} from "./pages/product/product.component";
import {ProductDetailComponent} from "./components/product-detail/product-detail.component";
import {IonContent} from "@ionic/angular/standalone";
import {SharedModule} from "../shared/shared-module";
import {StoreComponent} from "./pages/store/store.component";


@NgModule({
  declarations: [
    StoreComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    StoreRoutingModule,
    IonContent,
    SharedModule //modulos creados por nosotros que seran compartidos
  ]
})
export class StoreModule { }
