import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SearchExerciseService } from 'src/app/services/search-exercise.service';
import { Observable, Observer, Subscription } from 'rxjs';

@Component({
  selector: 'app-exercise-search',
  templateUrl: '../search-exercises/search-exercises.component.html',
  styleUrls: ['../search-exercises/search-exercises.component.css'],
})
export class SearchExercisesComponent implements OnInit, OnDestroy {
  searchForm: FormGroup;
  exercises: any[] = [];
  currentPage: number = 1;
  itemsPerPage: number = 10;
  isLoading: boolean = false;
  private subscription: Subscription | undefined;

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

  ngOnInit() {
    this.subscribeToScrollEvents();
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  subscribeToScrollEvents() {
    this.subscription = new Observable<Event>((observer: Observer<Event>) => {
      const scrollHandler = (event: Event) => {
        observer.next(event);
      };

      window.addEventListener('scroll', scrollHandler);

      return () => {
        window.removeEventListener('scroll', scrollHandler);
      };
    }).subscribe((event: Event) => {
      this.onScroll();
    });
  }

  onScroll() {
    if (this.isLoading || this.exercises.length === 0) {
      return;
    }

    const scrollPosition = window.innerHeight + window.scrollY;
    const pageHeight = document.body.offsetHeight;

    if (scrollPosition > pageHeight - 1000) {
      this.currentPage++;
      this.fetchExercisesByMuscle();
    }
  }

  onSubmit() {
    if (this.searchForm.invalid) {
      return;
    }

    this.currentPage = 1;
    this.fetchExercisesByMuscle();
  }

  fetchExercisesByMuscle() {
    if (this.searchForm.invalid) {
      return;
    }

    this.isLoading = true;
    let muscle = this.searchForm.value.muscle;

    muscle = muscle.toLowerCase().replace(/\s/g, '_');
    const offset = (this.currentPage - 1) * this.itemsPerPage;

    this.searchExerciseService.getExercisesByMuscle(muscle).subscribe(
      (response) => {
        if (Array.isArray(response)) {
          this.exercises = [...this.exercises, ...response];
        }
      },
      (error) => {
        console.error('Error fetching exercises: ', error);
      },
      () => {
        this.isLoading = false;
      }
    );
  }
}
