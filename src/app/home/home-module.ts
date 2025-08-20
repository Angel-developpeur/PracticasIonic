import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { HomeRoutingModule } from "./home-routing-module";
import { HomeComponent } from "./pages/home/home.component";
import { ArticleComponent } from "./components/article/article.component";
import { IonContent } from "@ionic/angular/standalone";
import { SharedModule } from "../shared/shared-module";

@NgModule({
  declarations: [
    //importacion de los componentes que necesita este modulo,
    // un modiulo es como una vista general, todo lo quede de pasar en ella
    // en este caso, home es un modulo
    HomeComponent, //solo puede declarar componentes no modulos-componentes
    //entre componentes de un mismo modulo se pueden usar entre ellos , pues
    // pertenecen al mismo modulo.
    ArticleComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    IonContent,
    //importamos el modulo de componentes compartidos
    SharedModule,
  ],
})
export class HomeModule {
  //al cargarse el modulo, este llama a su archivo de rutas
  // generar el archivo de rutas solo es necesario si alguno de los componentes
  // sera renderizado atraves de una ruta y no de su selector
}
