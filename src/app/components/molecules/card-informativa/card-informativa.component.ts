import { Component, Input } from '@angular/core';
import { IonCard, IonCardContent, IonAvatar } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card-informativa',
  templateUrl: './card-informativa.component.html',
  styleUrls: ['./card-informativa.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardContent, IonAvatar]
})
export class CardInformativaComponent {
  @Input() imagen: string = '';
  @Input() titulo: string = '';
  @Input() descripcion: string = '';
  @Input() colorBorde: string = '#6c5ce7'; // Por defecto lila
}