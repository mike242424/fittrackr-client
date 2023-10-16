import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchExerciseService } from 'src/app/services/search-exercise.service';

@Component({
  selector: 'app-exercise-search',
  templateUrl: '../search-exercises/search-exercises.component.html',
  styleUrls: ['../search-exercises/search-exercises.component.css'],
})
export class SearchExercisesComponent implements OnInit {
  searchForm: FormGroup;
  exercises: any[] = [];

  muscles = [
    'Abdominals',
    'Abductors',
    'Adductors',
    'Biceps',
    'Calves',
    'Chest',
    'Forearms',
    'Glutes',
    'Hamstrings',
    'Lats',
    'Lower Back',
    'Middle Back',
    'Neck',
    'Quadriceps',
    'Traps',
    'Triceps',
  ];

  selectedMuscle: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private searchExerciseService: SearchExerciseService
  ) {
    this.searchForm = this.formBuilder.group({
      muscle: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }

    let muscle = this.searchForm.value.muscle;

    muscle = muscle.toLowerCase().replace(/\s/g, '_');

    this.searchExerciseService.getExercisesByMuscle(muscle).subscribe(
      (response) => {
        if (Array.isArray(response)) {
          this.exercises = response;
        }
      },
      (error) => {
        console.error('Error fetching exercises: ', error);
      }
    );
  }
}
