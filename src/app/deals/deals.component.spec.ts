import { ComponentFixture, TestBed } from '@angular/core/testing';

import { dealsComponent } from './deals.component';

describe('dealsComponent', () => {
  let component: dealsComponent;
  let fixture: ComponentFixture<dealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ dealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(dealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});