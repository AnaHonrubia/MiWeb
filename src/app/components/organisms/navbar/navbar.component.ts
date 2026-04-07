import { Component, Output, EventEmitter } from '@angular/core';
import { IonHeader, IonToolbar, IonButtons, IonButton } from '@ionic/angular/standalone';
import { BotonComponent } from '../../atoms/boton/boton.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  standalone: true,
  imports: [IonHeader, IonToolbar, IonButtons, IonButton, BotonComponent]
})
export class NavbarComponent {
  @Output() navClick = new EventEmitter<string>();
  @Output() cvClick = new EventEmitter<void>();

  onNav(id: string) {
    this.navClick.emit(id);
  }

  onCV() {
    this.cvClick.emit();
  }
}