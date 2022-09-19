import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidsdressComponent } from './kidsdress.component';

describe('KidsdressComponent', () => {
  let component: KidsdressComponent;
  let fixture: ComponentFixture<KidsdressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidsdressComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidsdressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
