import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { TituloComponent } from '../atoms/titulo/titulo.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
  standalone: true,
  imports: [ IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, TituloComponent  ]
})
export class ExperienciaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
