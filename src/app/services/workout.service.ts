import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class WorkoutService {
  private apiUrl = environment.fitTrackrApiUrl;

  constructor(private http: HttpClient) {}

  getWorkouts(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  createWorkout(workoutData: { title: string, location: string }): Observable<any> {
    return this.http.post(this.apiUrl, workoutData);
  }

  deleteWorkout(workoutId: number): Observable<any> {
    const deleteUrl = `${this.apiUrl}/${workoutId}`;
    return this.http.delete(deleteUrl);
  }
}
