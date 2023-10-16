import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkoutService } from '../workout.service';
import { ExerciseService } from '../exercise.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
})
export class WorkoutListComponent implements OnInit {
  workouts: any[] = [];
  workoutForm: FormGroup;
  exerciseForm: FormGroup;
  showModal: boolean = false;
exercise: any;

  constructor(
    private workoutService: WorkoutService,
    private fb: FormBuilder,
    private exerciseService: ExerciseService
  ) {
    this.workoutForm = fb.group({
      title: ['', Validators.required],
    });

    this.exerciseForm = fb.group({
      title: ['', Validators.required],
      sets: ['', Validators.required],
      reps: ['', Validators.required],
      weight: ['', Validators.required],
    });
  }

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

  onSubmit() {
    if (this.workoutForm.invalid) {
      return;
    }

    const title = this.workoutForm.value.title;

    this.workoutService.createWorkout({ title }).subscribe(
      (response) => {
        this.workoutForm.reset();

        this.getWorkouts();
      },
      (error) => {
        console.error('Error creating workout', error);
      }
    );
  }

  deleteWorkout(workoutId: number) {
    this.workoutService.deleteWorkout(workoutId).subscribe(
      (response) => {
        this.getWorkouts();
      },
      (error) => {
        console.error('Error deleting workout', error);
      }
    );
  }

  addExercise(workoutId: number) {
    if (this.exerciseForm.invalid) {
      return;
    }

    const title = this.exerciseForm.value.title;
    const sets = this.exerciseForm.value.sets;
    const repsInput = this.exerciseForm.value.reps;
    const weightInput = this.exerciseForm.value.weight;

    const reps = repsInput
      .split(',')
      .map((value: string) => Number(value.trim()));
    const weight = weightInput
      .split(',')
      .map((value: string) => Number(value.trim()));

    const exerciseData = {
      title: title,
      sets: sets,
      reps: reps,
      weight: weight,
    };

    this.exerciseService
      .addExerciseToWorkout(workoutId, exerciseData)
      .subscribe(
        (response) => {
          this.getWorkouts();
          this.exerciseForm.reset();
        },
        (error) => {
          console.error('Error adding exercise', error);
        }
      );
  }

  deleteExercise(workoutId: number, exerciseId: number) {
    this.exerciseService.deleteExercise(workoutId, exerciseId).subscribe(
      (response) => {
        this.getWorkouts(); 
      },
      (error) => {
        console.error('Error deleting exercise', error);
      }
    );
  }
}
