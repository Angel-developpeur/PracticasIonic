import { importProvidersFrom } from "@angular/core";
import { Routes } from "@angular/router";

export const routes: Routes = [
  {
    path: "home",
    //esto es para carga el modulo, el cual debe de encargarse de gestionar sus
    // propias rutas internas
    loadChildren: () => import("./home/home-module").then((m) => m.HomeModule),
  },
  {
    path: "store",
    loadChildren: () =>
      import("./store/store-module").then((m) => m.StoreModule),
  },
  {
    path: "notifications",
    loadChildren: () =>
      import("./notifications/notifications-module").then(
        (m) => m.NotificationsModule,
      ),
  },
  {
    path: "contact",
    loadChildren: () =>
      import("./contact/contact-module").then((m) => m.ContactModule),
  },
  {
    path: "user",
    loadChildren: () => import("./user/user-module").then((m) => m.UserModule),
  },
  {
    path: "**", //con doble asterisco indicamos que cualquier ruta que no councida
    //con alguna se rederija a este, es como el default de un switch
    loadComponent: () =>
      import("./shared/pages/not-found/not-found.component").then(
        (m) => m.NotFoundComponent,
      ),
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
];
