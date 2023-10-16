import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchExercisesComponent } from './search-exercises.component';

describe('SearchExercisesComponent', () => {
  let component: SearchExercisesComponent;
  let fixture: ComponentFixture<SearchExercisesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SearchExercisesComponent]
    });
    fixture = TestBed.createComponent(SearchExercisesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
