import { Component, OnInit } from '@angular/core';
import { WorkoutService } from '../workout.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
})
export class WorkoutListComponent implements OnInit {
  workouts: any[] = [];

  constructor(private workoutService: WorkoutService) {}

  ngOnInit(): void {
    this.getWorkouts();
  }

  getWorkouts() {
    this.workoutService.getWorkouts().subscribe(
      (response) => {
        if (Array.isArray(response.data)) {
          this.workouts = response.data;
        } else {
          console.error('Invalid data format for workouts');
        }
      },
      (error) => {
        console.error('Error fetching workouts: ', error);
      }
    );
  }
}
