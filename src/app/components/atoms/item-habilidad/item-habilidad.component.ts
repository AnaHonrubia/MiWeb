import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import * as icons from 'ionicons/icons';

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
    addIcons({ ...icons });
  }
}