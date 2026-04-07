import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-boton',
  templateUrl: './boton.component.html',
  styleUrls: ['./boton.component.scss'],
  standalone: true,
  imports: [IonButton]
})
export class BotonComponent {
  @Input() texto: string = '';
  @Input() color: string = 'light';
  @Input() fill: string = 'outline';
  @Output() clic = new EventEmitter<void>();

  alHacerClic() {
    this.clic.emit();
  }
}
