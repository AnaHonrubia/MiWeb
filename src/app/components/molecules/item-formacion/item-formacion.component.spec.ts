import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { ItemFormacionComponent } from './item-formacion.component';

describe('ItemFormacionComponent', () => {
  let component: ItemFormacionComponent;
  let fixture: ComponentFixture<ItemFormacionComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      imports: [ItemFormacionComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ItemFormacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
