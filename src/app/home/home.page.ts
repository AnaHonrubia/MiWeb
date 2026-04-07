import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonAvatar, IonImg 
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { logoLinkedin, mailOutline, logoGithub } from 'ionicons/icons';

// Importación de tus componentes Standalone
import { SobreMiComponent } from '../components/sobre-mi/sobre-mi.component';
import { FormacionComponent } from '../components/formacion/formacion.component';
import { ProyectosComponent } from '../components/proyectos/proyectos.component';
import { ExperienciaComponent } from '../components/experiencia/experiencia.component';
import { HabilidadesComponent } from '../components/habilidades/habilidades.component';
import { ContactoComponent } from '../components/contacto/contacto.component';
import { BotonComponent } from '../components/atoms/boton/boton.component';
import { AvatarComponent } from '../components/atoms/avatar/avatar.component';
import { HeroComponent } from '../components/organisms/hero/hero.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    // Componentes nativos de Ionic para la estructura principal
    IonHeader, IonToolbar, IonContent, IonButton, IonButtons, IonAvatar, IonImg,
    // Tus componentes modulares
    SobreMiComponent, FormacionComponent, ProyectosComponent, ExperienciaComponent, HabilidadesComponent, ContactoComponent,
    BotonComponent, AvatarComponent, HeroComponent
  ],
})
export class HomePage {
  constructor() {
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
