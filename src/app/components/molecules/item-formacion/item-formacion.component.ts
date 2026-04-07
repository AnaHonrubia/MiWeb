import { Component, Input } from '@angular/core';
import { IonItem, IonLabel } from '@ionic/angular/standalone';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-item-formacion',
  templateUrl: './item-formacion.component.html',
  styleUrls: ['./item-formacion.component.scss'],
  standalone: true,
  imports: [IonItem, IonLabel, CommonModule]
})
export class ItemFormacionComponent {
  @Input() grado: string = '';
  @Input() centro: string = '';
  @Input() fecha: string = '';
  @Input() detalles?: string;
  @Input() detallesSecundarios?: string;
}