import { Component } from '@angular/core';
import { 
  IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonAvatar 
} from '@ionic/angular/standalone';
import { TituloComponent } from '../atoms/titulo/titulo.component';
import { CardInformativaComponent } from '../molecules/card-informativa/card-informativa.component';

@Component({
  selector: 'app-sobre-mi',
  templateUrl: './sobre-mi.component.html',
  styleUrls: ['./sobre-mi.component.scss'],
  standalone: true, // Muy importante para que funcione solo
  imports: [
    IonGrid, IonRow, IonCol, IonCard, IonCardContent, IonAvatar, 
    TituloComponent, CardInformativaComponent
  ]
})
export class SobreMiComponent { }