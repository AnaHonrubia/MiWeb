import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CardInformativaComponent } from './card-informativa.component';

describe('CardInformativaComponent', () => {
  let component: CardInformativaComponent;
  let fixture: ComponentFixture<CardInformativaComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [CardInformativaComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(CardInformativaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
