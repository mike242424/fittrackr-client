import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { WorkoutService } from '../../services/workout.service';
import { ExerciseService } from '../../services/exercise.service';

@Component({
  selector: 'app-workout-list',
  templateUrl: './workout-list.component.html',
  styleUrls: ['./workout-list.component.css'],
})
export class WorkoutListComponent implements OnInit {
  workouts: any[] = [];
  workoutForm: FormGroup;
  exerciseForm: FormGroup;
  showModal = false;
  exercise: any;
  dataLoaded = false;
  currentWorkoutId: number = 0;

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
        this.dataLoaded = true;
      },
      (error) => {
        console.error('Error fetching workouts: ', error);
        this.dataLoaded = true;
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

    this.closeWorkoutModal();
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

  addExercise() {
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

    // Use this.currentWorkoutId to add exercise to the correct workout
    this.exerciseService
      .addExerciseToWorkout(this.currentWorkoutId, exerciseData)
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

  openWorkoutModal() {
    const workoutModalDiv = document.getElementById('workoutModal');
    if (workoutModalDiv != null) {
      workoutModalDiv.style.display = 'block';
    }
  }

  closeWorkoutModal() {
    const workoutModalDiv = document.getElementById('workoutModal');
    if (workoutModalDiv != null) {
      workoutModalDiv.style.display = 'none';
    }
  }

  openExerciseModal(workoutId: number) {
    this.currentWorkoutId = workoutId;

    const exerciseModalDiv = document.getElementById('exerciseModal');
    if (exerciseModalDiv != null) {
      exerciseModalDiv.style.display = 'block';
    }
  }

  closeExerciseModal() {
    const exerciseModalDiv = document.getElementById('exerciseModal');
    if (exerciseModalDiv != null) {
      exerciseModalDiv.style.display = 'none';
    }
  }
}
