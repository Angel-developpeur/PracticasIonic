import { Component, OnInit } from "@angular/core";
import { models } from "src/app/models/home.model";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
  standalone: false, // es obligatoria poner standalone false, para indicar que
  //es un componente y no un modulo componente
})
export class ArticleComponent implements OnInit {
  //una variable de tipo ArticuloI
  article: models.ArticuloI;

  constructor() {
    this.loadArticulo();
  }

  ngOnInit() {}

  loadArticulo() {
    const data: models.ArticuloI = {
      title: "Google empresa",
      descripcion: "google es una empresa estadounidense",
      image: {
        url: "assets/g.png",
        desc: "no se que poner aqui",
      },
      id: "1",
    };
    this.article = data;
  }
}
