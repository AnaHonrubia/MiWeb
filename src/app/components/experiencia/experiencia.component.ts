import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
  standalone: true,
  imports: [ IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent  ]
})
export class ExperienciaComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
