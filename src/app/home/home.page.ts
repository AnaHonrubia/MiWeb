import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonAvatar, IonImg 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoLinkedin, mailOutline, logoGithub } from 'ionicons/icons';

// Importa tus nuevos componentes aquí:
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
    // Componentes de Ionic necesarios para la Home
    IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonAvatar, IonImg,
    // Tus componentes personalizados
    SobreMiComponent,
    FormacionComponent,
    ProyectosComponent,
    ExperienciaComponent,
    HabilidadesComponent,
    ContactoComponent
  ],
})
export class HomePage {
  constructor() {
    // En la Home solo registramos los iconos que se ven en la cabecera/hero
    addIcons({ logoLinkedin, mailOutline, logoGithub });
  }

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
