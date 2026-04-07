import { Component } from '@angular/core';
import { IonList } from '@ionic/angular/standalone';
import { TituloComponent } from '../atoms/titulo/titulo.component';
import { ItemFormacionComponent } from '../molecules/item-formacion/item-formacion.component';

@Component({
  selector: 'app-formacion',
  templateUrl: './formacion.component.html',
  styleUrls: ['./formacion.component.scss'],
  standalone: true,
  imports: [IonList, TituloComponent, ItemFormacionComponent]
})
export class FormacionComponent { }