import { Component } from '@angular/core';
// Importamos solo lo que usa este componente
import { 
  IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonAvatar 
} from '@ionic/angular/standalone';
import { TituloComponent } from '../atoms/titulo/titulo.component';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss'],
  standalone: true, // Muy importante para que funcione solo
  imports: [
    IonGrid, 
    IonRow, 
    IonCol, 
    IonCard, 
    IonCardContent, 
    IonAvatar, 
    TituloComponent
  ]
})
export class SobreMiComponent { }