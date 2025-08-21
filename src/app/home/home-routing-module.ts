import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
];

@NgModule({
  // en los modulos ya viene incluido el RouterModule para usar routerLink,
  // no es necesario inportarlo
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
