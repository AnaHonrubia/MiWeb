import { Component, Input } from '@angular/core';
import { IonIcon } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoLinkedin, mailOutline, logoGithub, logoInstagram } from 'ionicons/icons';

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss'],
  standalone: true,
  imports: [IonIcon]
})
export class SocialIconComponent {
  @Input() link: string = '';
  @Input() iconName: string = '';
  @Input() color: string = '#ffffff';

  constructor() {
    // Registramos los iconos que usa este átomo
    addIcons({ 
      'logo-linkedin': logoLinkedin, 
      'mail-outline': mailOutline, 
      'logo-github': logoGithub, 
      'logo-instagram': logoInstagram 
    });
  }
}
