import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WorkoutListComponent } from './components/workout/workout-list.component';
import { WorkoutService } from './services/workout.service';
import { FormatWithCommasAndSpacesPipe } from './custom-pipes/format-with-commas-and-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkoutListComponent,
    FormatWithCommasAndSpacesPipe,
  ],
  imports: [BrowserModule, FormsModule, ReactiveFormsModule, HttpClientModule],
  providers: [WorkoutService],
  bootstrap: [AppComponent],
})
export class AppModule {}
