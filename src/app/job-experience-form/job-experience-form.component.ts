import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

@Component({
  selector: 'app-job-experience-form',
  templateUrl: './job-experience-form.component.html',
  styleUrls: ['./job-experience-form.component.css'],
})
export class JobExperienceFormComponent {
  jobExperienceForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.jobExperienceForm = this.fb.group({
      jobs: this.fb.array([]),
    });
  }

  get jobs(): FormArray {
    return this.jobExperienceForm.get('jobs') as FormArray;
  }

  addJob() {
    const controls = {
      companyName: ['', Validators.required],
      companyWebsite: [
        '',
        [Validators.required, Validators.pattern('https?://.+')],
      ],
      companyDescription: ['', Validators.required],
      positions: this.fb.array([]),
    };

    const jobForm = this.fb.group(controls);
    this.jobs.push(jobForm);
  }
}
