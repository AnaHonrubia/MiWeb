import { Component } from '@angular/core';
import { 
  IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, 
  IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, 
  IonItem, IonLabel, IonList, IonIcon, IonGrid, IonBadge, IonRow, IonAvatar, IonImg, IonCol
} from '@ionic/angular/standalone';
import { logoLinkedin, mailOutline, logoGithub, logoHtml5, logoCss3, logoJavascript, 
         logoAngular, logoIonic, logoFirebase, logoAndroid, logoInstagram, codeSlashOutline,
         gitBranchOutline, cafeOutline } from 'ionicons/icons';
import { addIcons } from 'ionicons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
      IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonButtons, 
      IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, 
      IonItem, IonLabel, IonList, IonIcon, IonGrid, IonBadge, IonRow, IonAvatar, IonImg, IonCol
  ],
})

export class HomePage {
  constructor() {
    addIcons({ logoLinkedin, mailOutline, logoGithub, 
               'logo-html5': logoHtml5, 
               'logo-css3': logoCss3, 
               'logo-javascript': logoJavascript, 
               'logo-angular': logoAngular, 
               'logo-ionic': logoIonic, 
               'logo-firebase': logoFirebase, 
               'logo-android': logoAndroid, 
               'logo-instagram': logoInstagram,
               'code-slash-outline': codeSlashOutline,
               'git-branch-outline': gitBranchOutline,
               'logo-java': cafeOutline });
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
