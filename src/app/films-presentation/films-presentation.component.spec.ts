import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmsPresentationComponent } from './films-presentation.component';

describe('FilmsPresentationComponent', () => {
  let component: FilmsPresentationComponent;
  let fixture: ComponentFixture<FilmsPresentationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FilmsPresentationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilmsPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
