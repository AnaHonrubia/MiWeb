import { Component, Input } from '@angular/core';
import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-experiencia',
  templateUrl: './card-experiencia.component.html',
  styleUrls: ['./card-experiencia.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent]
})
export class CardExperienciaComponent {
  @Input() empresa: string = '';
  @Input() cargo: string = '';
  @Input() fecha: string = '';
  @Input() color: string = '#00d2ff'; 
}