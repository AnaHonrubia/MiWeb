import { Component } from '@angular/core';
import { SocialIconComponent } from '../atoms/social-icon/social-icon.component';
import { TituloComponent } from '../atoms/titulo/titulo.component';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss'],
  standalone: true,
  imports: [SocialIconComponent, TituloComponent]
})
export class ContactoComponent {
  
}