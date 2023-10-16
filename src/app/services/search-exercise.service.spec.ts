import { TestBed } from '@angular/core/testing';

import { SearchExerciseService } from './search-exercise.service';

describe('SearchExerciseService', () => {
  let service: SearchExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
