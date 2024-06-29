import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobExperienceFormComponent } from './job-experience-form.component';

describe('JobExperienceFormComponent', () => {
  let component: JobExperienceFormComponent;
  let fixture: ComponentFixture<JobExperienceFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [JobExperienceFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(JobExperienceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
