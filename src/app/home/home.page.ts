import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, 
  IonItem, IonLabel, IonList, IonIcon, IonGrid, IonCol, IonBadge, IonRow
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
      IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, 
      IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, 
      IonItem, IonLabel, IonList, IonIcon, IonGrid, IonCol, IonBadge, IonRow
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
