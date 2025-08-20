import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NotificationsRoutingModule } from './notifications-routing-module';
import {NotificationsComponent} from "./pages/notifications/notifications.component";
import {IconNotificationComponent} from "./components/icon-notification/icon-notification.component";
import {DetailNotificationsComponent} from "./components/detail-notifications/detail-notifications.component";
import {IonContent} from "@ionic/angular/standalone";


@NgModule({
  declarations: [
    NotificationsComponent,
    DetailNotificationsComponent,
    IconNotificationComponent,
  ],
  imports: [
    CommonModule,
    NotificationsRoutingModule,
    IonContent
  ],
  exports: [
    IconNotificationComponent //lo exportamos por que queremos que sea usado
    //en el shared modulo
  ]
})
export class NotificationsModule { }
