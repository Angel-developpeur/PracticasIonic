import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
  standalone: false, // es obligatoria poner standalone false, para indicar que
  //es un componente y no un modulo componente
})
export class ArticleComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
