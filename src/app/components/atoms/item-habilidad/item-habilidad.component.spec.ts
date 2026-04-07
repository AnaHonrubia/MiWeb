import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemHabilidadComponent } from './item-habilidad.component';

describe('ItemHabilidadComponent', () => {
  let component: ItemHabilidadComponent;
  let fixture: ComponentFixture<ItemHabilidadComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ItemHabilidadComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemHabilidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
