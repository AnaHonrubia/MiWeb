import { Component } from '@angular/core';
import { 
  IonGrid, IonRow, IonCol, IonCard, IonCardHeader, 
  IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonButton, IonIcon, IonAvatar
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGithub } from 'ionicons/icons';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
  standalone: true,
  imports: [
    IonGrid, IonRow, IonCol, IonCard, IonCardHeader, 
    IonCardTitle, IonCardSubtitle, IonCardContent, IonBadge, IonButton, IonIcon, IonAvatar
  ]
})
export class ProyectosComponent {
  constructor() {
    addIcons({ logoGithub });
  }
}