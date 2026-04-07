import { Component } from '@angular/core';
import { ItemHabilidadComponent } from '../atoms/item-habilidad/item-habilidad.component';
import { TituloComponent } from '../atoms/titulo/titulo.component';

@Component({
  selector: 'app-habilidades',
  templateUrl: './habilidades.component.html',
  styleUrls: ['./habilidades.component.scss'],
  standalone: true,
  imports: [
    ItemHabilidadComponent, 
    TituloComponent
  ]
})
export class HabilidadesComponent {
  constructor() {
    
  }
}