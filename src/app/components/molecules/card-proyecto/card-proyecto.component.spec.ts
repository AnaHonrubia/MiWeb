import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardProyectoComponent } from './card-proyecto.component';

describe('CardProyectoComponent', () => {
  let component: CardProyectoComponent;
  let fixture: ComponentFixture<CardProyectoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CardProyectoComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardProyectoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
