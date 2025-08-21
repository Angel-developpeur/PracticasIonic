import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-article",
  templateUrl: "./article.component.html",
  styleUrls: ["./article.component.scss"],
  standalone: false, // es obligatoria poner standalone false, para indicar que
  //es un componente y no un modulo componente
})
export class ArticleComponent implements OnInit {

  //una variable de tipo ArticuloI
  article: ArticuloI;

  constructor() {
    this.loadArticulo();
  }

  ngOnInit() {}

  loadArticulo(){
      const data: ArticuloI  = {
        title: 'Google empresa',
        descripcion: 'google es una empresa estadounidense',
        image: {
          url: 'assets/g.png',
          desc: 'no se que poner aqui'
        },
        id: '1'
      };
      this.article = data;
  }
}

//interfaz de tipo articuloI
interface ArticuloI{
  title: string;
  descripcion: string;
  image: {
    url: string;
    desc: string;

  }
  id?: string;
}
