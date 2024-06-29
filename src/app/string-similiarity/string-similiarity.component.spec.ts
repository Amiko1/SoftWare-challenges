import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StringSimiliarityComponent } from './string-similiarity.component';

describe('StringSimiliarityComponent', () => {
  let component: StringSimiliarityComponent;
  let fixture: ComponentFixture<StringSimiliarityComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StringSimiliarityComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StringSimiliarityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
