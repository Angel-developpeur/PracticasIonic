import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  standalone: false, /// es necesario standalone false, para indicar que es
  //se trata de un componente y no un modulo componente
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
