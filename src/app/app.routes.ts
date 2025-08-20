import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    //esto es para carga el modulo, el cual debe de encargarse de gestionar sus
    // propias rutas internas
    loadChildren: () => import("./home/home-module").then((m) => m.HomeModule),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];
