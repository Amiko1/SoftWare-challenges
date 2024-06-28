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
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms'; // Import FormsModule

import { AppComponent } from './app.component';
import { JobExperienceFormComponent } from './job-experience-form/job-experience-form.component';
import { FilmsPresentationComponent } from './films-presentation/films-presentation.component';
import {
  HttpHeaders,
  provideHttpClient,
  withInterceptors,
} from '@angular/common/http';
import { configInterceptor } from './core/http/Interceptors/config-interceptor';
import { FilmPresentationService } from './services/film-presentation.service';

const routes: Routes = [
  { path: 'job-experience', component: JobExperienceFormComponent },
  { path: 'film-presentation', component: FilmsPresentationComponent },
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
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatInputModule,
    MatSelectModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule,
    RouterModule.forRoot(routes),
  ],
  providers: [
    provideHttpClient(withInterceptors([configInterceptor])),
    FilmPresentationService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
