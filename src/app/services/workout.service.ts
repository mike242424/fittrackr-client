import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private apiUrl = 'http://localhost:4000/api/workouts';

  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createWorkout(workoutData: { title: string }): Observable<any> {
    return this.http.post(this.apiUrl, workoutData);
  }

  deleteWorkout(workoutId: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${workoutId}`;
    return this.http.delete(deleteUrl);
  }
}