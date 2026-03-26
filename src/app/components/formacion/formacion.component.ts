import { Component } from '@angular/core';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-formacion', // Corregido
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel]
})
export class FormacionComponent { 
  
}
