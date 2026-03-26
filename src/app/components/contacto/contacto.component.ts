import { Component } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoLinkedin, mailOutline, logoGithub, logoInstagram } from 'ionicons/icons';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  standalone: true,
  imports: [IonIcon]
})
export class ContactoComponent {
  constructor() {
    addIcons({ logoLinkedin, 'mail-outline': mailOutline, logoGithub, logoInstagram });
  }
}