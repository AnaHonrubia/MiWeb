import { Component } from '@angular/core';
import { IonList, IonItem, IonLabel } from '@ionic/angular/standalone';
import { TituloComponent } from '../atoms/titulo/titulo.component';

@Component({
  selector: 'app-formacion', // Corregido
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss'],
  standalone: true,
  imports: [IonList, IonItem, IonLabel, TituloComponent]
})
export class FormacionComponent { 
  
}
