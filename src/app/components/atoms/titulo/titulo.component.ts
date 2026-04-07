import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-titulo',
  templateUrl: './titulo.component.html',
  styleUrls: ['./titulo.component.scss'],
  standalone: true
})
export class TituloComponent {
  // Con esto podemos cambiar el texto desde otro componente
  @Input() texto: string = ''; 

  
}
