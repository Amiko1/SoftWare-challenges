import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { urlValidator } from '../core/forms/validators/url-validator';

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
      companyWebsite: ['', [Validators.required, urlValidator]],
      companyDescription: ['', Validators.required],
      positions: this.fb.array([]),
    };

    const jobForm = this.fb.group(controls);
    this.jobs.push(jobForm);
  }

  removeJob(index: number) {
    this.jobs.removeAt(index);
  }

  getPositions(jobIndex: number): FormArray {
    return this.jobs.at(jobIndex).get('positions') as FormArray;
  }

  addPosition(jobIndex: number) {
    const PositionControl = {
      name: ['', Validators.required],
      level: ['', Validators.required],
      description: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
    };
    const positionForm = this.fb.group(PositionControl);

    this.getPositions(jobIndex).push(positionForm);
  }

  removePosition(jobIndex: number, positionIndex: number) {
    this.getPositions(jobIndex).removeAt(positionIndex);
  }

  onSubmit() {
    if (!this.jobExperienceForm.invalid) {
      console.log(this.jobExperienceForm.value);
    } else {
      console.error('Form Is not valid');
    }
  }
}
