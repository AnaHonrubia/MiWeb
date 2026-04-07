import { Component } from '@angular/core';
import { 
  IonGrid, IonRow, IonCol, IonButton, IonIcon 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoGithub } from 'ionicons/icons';
import { TituloComponent } from '../atoms/titulo/titulo.component';
import { CardProyectoComponent } from '../molecules/card-proyecto/card-proyecto.component';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
  standalone: true,
  imports: [
    IonGrid, IonRow, IonCol, IonButton, IonIcon,
    TituloComponent,
    CardProyectoComponent 
  ]
})
export class ProyectosComponent {
  constructor() {
    addIcons({ logoGithub });
  }
}