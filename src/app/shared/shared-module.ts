import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";

@NgModule({
  declarations: [
    //se declaran los componetes de este modulo
    HeaderComponent,
    FooterComponent,
  ],
  imports: [CommonModule],
  exports: [
    //es neceario declarar lso componentes que pueden ser usados en los modulos que
    // importen este modulo
    HeaderComponent,
    FooterComponent,
  ],
})
export class SharedModule {}
