import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import {NotificationsModule} from "../notifications/notifications-module";

@NgModule({
  declarations: [
    //se declaran los componetes de este modulo
    HeaderComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    NotificationsModule //lo importamos para poder usar icon notification
  ],
  exports: [
    //es neceario declarar lso componentes que pueden ser usados en los modulos que
    // importen este modulo
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
