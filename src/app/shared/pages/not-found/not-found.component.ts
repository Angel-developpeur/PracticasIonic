import { Component, OnInit } from '@angular/core';
import {IonContent} from "@ionic/angular/standalone";
import {IonIcon} from "@ionic/angular/standalone";
import {IonButton} from "@ionic/angular/standalone";

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
  standalone: true,
  imports: [IonContent, IonIcon, IonButton] //si es estndalone true entonces puede importar elementos, ya que el componente es su propio modulo
})
export class NotFoundComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
