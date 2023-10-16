import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkoutListComponent } from './components/workout/workout-list.component';
import { SearchExercisesComponent } from './components/search-exercises/search-exercises.component';


const routes: Routes = [
  { path: '', component: WorkoutListComponent },
  { path: 'search', component: SearchExercisesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
