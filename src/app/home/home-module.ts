import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing-module";
import { HomeComponent } from "./pages/home/home.component";
import { ArticleComponent } from "./components/article/article.component";

@NgModule({
  declarations: [
    //importacion de los componentes que necesita este modulo,
    // un modiulo es como una vista general, todo lo quede de pasar en ella
    // en este caso, home es un modulo
    HomeComponent, //solo puede declarar componentes no modulos-componentes
    ArticleComponent,
  ],
  imports: [CommonModule, HomeRoutingModule],
})
export class HomeModule {
  //al cargarse el modulo, este llama a su archivo de rutas
}
