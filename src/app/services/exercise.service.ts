import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root',
})
export class ExerciseService {
  private apiUrl = environment.fitTrackrApiUrl;

  constructor(private http: HttpClient) {}

  addExerciseToWorkout(workoutId: number, exerciseData: any): Observable<any> {
    const addExerciseUrl = `${this.apiUrl}/${workoutId}/exercises`;
    return this.http.post(addExerciseUrl, exerciseData);
  }

  deleteExercise(workoutId: number, exerciseId: number): Observable<any> {
    const deleteExerciseUrl = `${this.apiUrl}/${workoutId}/exercises/${exerciseId}`;
    return this.http.delete(deleteExerciseUrl);
  }
}
