import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { JobExperienceFormComponent } from './job-experience-form/job-experience-form.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'job-experience', component: JobExperienceFormComponent },
];

@NgModule({
  declarations: [AppComponent, JobExperienceFormComponent],
  imports: [BrowserModule, AppRoutingModule, RouterModule.forRoot(routes)],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
