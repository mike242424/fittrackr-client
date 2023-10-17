import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorkoutListComponent } from './components/workout/workout-list.component';
import { WorkoutService } from './services/workout.service';
import { FormatWithCommasAndSpacesPipe } from './custom-pipes/format-with-commas-and-spaces.pipe';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ParseNumberArrayPipe } from './custom-pipes/parse-number-array.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { SearchExercisesComponent } from './components/search-exercises/search-exercises.component';
import { AppRoutingModule } from './app-routing.module';
import { CapitalizeFirstLetterPipe } from './custom-pipes/capitalize-first-letter.pipe';
import { FormatExerciseTypePipe } from './custom-pipes/format-exercise-type.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    FormatWithCommasAndSpacesPipe,
    NavbarComponent,
    ParseNumberArrayPipe,
    SearchExercisesComponent,
    CapitalizeFirstLetterPipe,
    FormatExerciseTypePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [WorkoutService],
  bootstrap: [AppComponent],
})
export class AppModule {}
