import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PointsElement } from '../models/database/points.element';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  baseUrl = 'api';
  points: PointsElement[];
  errorcode: Observable<number>;

constructor(private http: HttpClient) { }

  getPoints(): Observable<PointsElement[]> {
    return this.http.get(`${this.baseUrl}/getPoints.php`).pipe(
      map((res) => {
        this.points = res['data'];
        return this.points;
    }),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // return an observable with a user friendly message
    return throwError('Error! Something went wrong!');
  }
}
