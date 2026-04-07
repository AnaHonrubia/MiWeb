import { Component, Input } from '@angular/core';
import { IonAvatar, IonImg } from '@ionic/angular/standalone';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html', 
  styleUrls: ['./avatar.component.scss'],   
  standalone: true,
  imports: [IonAvatar, IonImg]
})
export class AvatarComponent {
  @Input() imagen: string = '';
  @Input() alt: string = '';
  @Input() tamano: string = '9.3rem'; // Valor por defecto
}