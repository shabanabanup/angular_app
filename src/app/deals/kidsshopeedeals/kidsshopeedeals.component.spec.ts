import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsshopeedealsComponent } from './kidsshopeedeals.component';

describe('KidsshopeedealsComponent', () => {
  let component: KidsshopeedealsComponent;
  let fixture: ComponentFixture<KidsshopeedealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsshopeedealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsshopeedealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
