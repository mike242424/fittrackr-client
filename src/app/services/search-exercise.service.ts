import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class SearchExerciseService {
  private apiUrl = environment.apiUrl;
  private apiKey = environment.apiKey;

  constructor(private http: HttpClient) {}

  getExercisesByMuscle(muscle: string): Observable<any> {
    const headers = new HttpHeaders({
      'X-Api-Key': this.apiKey,
    });

    const params = new HttpParams().set('muscle', muscle);

    return this.http.get(`${this.apiUrl}`, { headers, params });
  }
}
