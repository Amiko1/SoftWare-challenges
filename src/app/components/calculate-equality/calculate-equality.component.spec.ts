import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateEqualityComponent } from './calculate-equality.component';

describe('CalculateEqualityComponent', () => {
  let component: CalculateEqualityComponent;
  let fixture: ComponentFixture<CalculateEqualityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CalculateEqualityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateEqualityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
