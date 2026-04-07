import { Component, Input } from '@angular/core';
import { 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
  IonCardContent, IonBadge, IonButton, IonIcon, IonAvatar 
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-proyecto',
  templateUrl: './card-proyecto.component.html',
  styleUrls: ['./card-proyecto.component.scss'],
  standalone: true,
  imports: [
    IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, 
    IonCardContent, IonBadge, IonButton, IonIcon, IonAvatar
  ]
})
export class CardProyectoComponent {
  @Input() titulo: string = '';
  @Input() subtitulo: string = '';
  @Input() descripcion: string = '';
  @Input() imagen: string = '';
  @Input() colorPrincipal: string = '#00d2ff';
  @Input() tags: string[] = [];
  @Input() repoUrl: string = '';
  @Input() accionUrl: string = '';
  @Input() textoAccion: string = 'Ver Demo';
  @Input() esApk: boolean = false;
}
