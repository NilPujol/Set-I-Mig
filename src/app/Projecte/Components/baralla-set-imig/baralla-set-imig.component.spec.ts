import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarallaSetIMigComponent } from './baralla-set-imig.component';

describe('BarallaSetIMigComponent', () => {
  let component: BarallaSetIMigComponent;
  let fixture: ComponentFixture<BarallaSetIMigComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarallaSetIMigComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarallaSetIMigComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
