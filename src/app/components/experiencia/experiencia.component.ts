import { Component } from '@angular/core';
import { CardExperienciaComponent } from '../molecules/card-experiencia/card-experiencia.component';
import { TituloComponent } from '../atoms/titulo/titulo.component';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.scss'],
  standalone: true,
  imports: [CardExperienciaComponent, TituloComponent]
})
export class ExperienciaComponent {
  constructor() { }
}