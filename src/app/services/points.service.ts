import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ActivityElement } from '../models/database/activity.element';
import { ClassElement } from '../models/database/class.element';
import { PointElement } from '../models/database/points.element';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  baseUrl = 'api';
  activities: ActivityElement[];
  classes: ClassElement[];
  points: PointElement[];

constructor(private http: HttpClient) { }
  getActivities(): Observable<ActivityElement[]> {
    return this.http.get(`${this.baseUrl}/activities.php`).pipe(
      map((res) => {
        this.activities = res['data'];
        return this.activities;
    }),
    catchError(this.handleError));
  }
  getClasses(): Observable<ClassElement[]>  {
    return this.http.get(`${this.baseUrl}/classes.php`).pipe(
      map((res) => {
        this.classes = res['data'];
        return this.classes;
    }),
    catchError(this.handleError));
  }
  getPoints(): Observable<PointElement[]>  {
    return this.http.get(`${this.baseUrl}/points.php`).pipe(
      map((res) => {
        this.points = res['data'];
        return this.points;
    }),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    console.log(error);

    // return an observable with a user friendly message
    return throwError('Error! something went wrong.');
  }
}
