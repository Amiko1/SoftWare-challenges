import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JobExperienceFormComponent } from './job-experience-form/job-experience-form.component';

const routes: Routes = [
  { path: 'job-experience', component: JobExperienceFormComponent },
];

@NgModule({
  declarations: [AppComponent, JobExperienceFormComponent],
  imports: [BrowserModule, ReactiveFormsModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
