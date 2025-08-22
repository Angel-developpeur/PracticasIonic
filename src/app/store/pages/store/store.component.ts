import { Component, model, OnInit } from "@angular/core";
import { models } from "src/app/models/home.model";

@Component({
  selector: "app-store",
  templateUrl: "./store.component.html",
  styleUrls: ["./store.component.scss"],
  standalone: false,
})
export class StoreComponent implements OnInit {
  items: models.Item[];
  cargando: boolean = true;
  constructor() {
    this.loadItems();
  }

  ngOnInit() {}

  loadItems() {
    setTimeout(() => {
      this.items = DataDemo;
      this.cargando = false;
      console.log(this.items);
    }, 2000);
  }

  keydown(){
    console.log('key downs');
  }

  keyup(){
    console.log('key up');
  }

  click(){
    console.log('click');
  }
}

const DataDemo: models.Item[] = [
  {
    id: "1",
    name: "hamburguesa",
    description: "platiyo americano",
    price: 4.5,
  },
  {
    id: "2",
    name: "hot dogs",
    description: "platiyo americano",
    price: 7.5,
  },
  {
    id: "3",
    name: "tacos",
    description: "platiyo mexicano",
    price: 11.5,
  },
];
