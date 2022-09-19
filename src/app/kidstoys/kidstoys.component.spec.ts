import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KidstoysComponent } from './kidstoys.component';

describe('KidstoysComponent', () => {
  let component: KidstoysComponent;
  let fixture: ComponentFixture<KidstoysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KidstoysComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KidstoysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
