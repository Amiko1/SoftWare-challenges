import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { JobExperienceFormComponent } from './job-experience-form/job-experience-form.component';
import { FilmsPresentationComponent } from './films-presentation/films-presentation.component';
import { provideHttpClient } from '@angular/common/http';

const routes: Routes = [
  { path: 'job-experience', component: JobExperienceFormComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    JobExperienceFormComponent,
    FilmsPresentationComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes),
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
})
export class AppModule {}
