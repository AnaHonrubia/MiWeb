import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { 
  logoHtml5, logoCss3, logoJavascript, logoAngular, logoIonic, 
  logoGithub, codeSlashOutline 
} from 'ionicons/icons';

@Component({
  selector: 'app-item-habilidad',
  templateUrl: './item-habilidad.component.html',
  styleUrls: ['./item-habilidad.component.scss'],
  standalone: true,
  imports: [IonIcon]
})

export class ItemHabilidadComponent {
  @Input() nombre: string = '';
  @Input() icono: string = '';
  @Input() colorIcono: string = '';

  constructor() {
    addIcons({ 
      'logo-html5': logoHtml5, 
      'logo-css3': logoCss3, 
      'logo-javascript': logoJavascript, 
      'logo-angular': logoAngular, 
      'logo-ionic': logoIonic, 
      'logo-github': logoGithub,
      'code-slash-outline': codeSlashOutline
    });
  }
}