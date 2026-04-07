import { Component } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';

// Importación de tus componentes modulares y organismos
import { NavbarComponent } from '../components/organisms/navbar/navbar.component';
import { HeroComponent } from '../components/organisms/hero/hero.component';
import { SobreMiComponent } from '../components/sobre-mi/sobre-mi.component';
import { FormacionComponent } from '../components/formacion/formacion.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { ContactoComponent } from '../components/contacto/contacto.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    IonContent,
    // Tus nuevos organismos
    NavbarComponent, HeroComponent,
    // Tus secciones modulares
    SobreMiComponent, FormacionComponent, ProyectosComponent, ExperienciaComponent, HabilidadesComponent, ContactoComponent
  ],
})
export class HomePage {
  constructor() {}

  scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  }

  openCV() {
    window.open('assets/CV_AHB.pdf', '_blank');
  }
}