import { Component, Output, EventEmitter } from '@angular/core';
import { AvatarComponent } from '../../atoms/avatar/avatar.component';
import { BotonComponent } from '../../atoms/boton/boton.component';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss'],
  standalone: true,
  imports: [AvatarComponent, BotonComponent]
})
export class HeroComponent {
  @Output() clicConoceme = new EventEmitter<void>();

  onConoceme() {
    this.clicConoceme.emit();
  }
}