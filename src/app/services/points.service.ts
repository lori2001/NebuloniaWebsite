import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { ActivitiesElement } from '../models/database/activities.element';
import { PointsElement } from '../models/database/points.element';

@Injectable({
  providedIn: 'root',
})
export class PointsService {
  baseUrl = 'api';
  points: PointsElement[];
  classes: string[];
  activities: ActivitiesElement[];
  errorcode: Observable<number>;
  modpassword: string;

  constructor(private http: HttpClient) {}

  getClasses(): Observable<string[]> {
    this.classes = [
      '9.A',
      '9.B',
      '9.C',
      '9.D',
      '10.A',
      '10.B',
      '10.C',
      '10.D',
      '11.A',
      '11.B',
      '11.C',
      '11.D',
      '12.A',
      '12.B',
      '12.C',
      '12.D',
    ];

    return of(this.classes);
  }

  getPoints(): Observable<PointsElement[]> {
    this.points = [
      {
        id: 1,
        classId: 1,
        className: '9.A',
        activityId: 1,
        activity: 'Gastró est',
        value: 23,
      },
      {
        id: 2,
        classId: 2,
        className: '9.B',
        activityId: 1,
        activity: 'Gastró est',
        value: 25,
      },
      {
        id: 3,
        classId: 3,
        className: '9.C',
        activityId: 1,
        activity: 'Gastró est',
        value: 64,
      },
      {
        id: 4,
        classId: 4,
        className: '9.D',
        activityId: 1,
        activity: 'Gastró est',
        value: 12,
      },
      {
        id: 5,
        classId: 5,
        className: '10.A',
        activityId: 1,
        activity: 'Gastró est',
        value: 23,
      },
      {
        id: 6,
        classId: 6,
        className: '10.B',
        activityId: 1,
        activity: 'Gastró est',
        value: 94,
      },
      {
        id: 7,
        classId: 7,
        className: '10.C',
        activityId: 1,
        activity: 'Gastró est',
        value: 3,
      },
      {
        id: 8,
        classId: 8,
        className: '10.D',
        activityId: 1,
        activity: 'Gastró est',
        value: 12,
      },
      {
        id: 9,
        classId: 9,
        className: '11.A',
        activityId: 1,
        activity: 'Gastró est',
        value: 73,
      },
      {
        id: 10,
        classId: 10,
        className: '11.B',
        activityId: 1,
        activity: 'Gastró est',
        value: 52,
      },
      {
        id: 11,
        classId: 11,
        className: '11.C',
        activityId: 1,
        activity: 'Gastró est',
        value: 23,
      },
      {
        id: 12,
        classId: 12,
        className: '11.D',
        activityId: 1,
        activity: 'Gastró est',
        value: 69,
      },
      {
        id: 13,
        classId: 13,
        className: '12.A',
        activityId: 1,
        activity: 'Gastró est',
        value: 85,
      },
      {
        id: 14,
        classId: 14,
        className: '12.B',
        activityId: 1,
        activity: 'Gastró est',
        value: 25,
      },
      {
        id: 15,
        classId: 15,
        className: '12.C',
        activityId: 1,
        activity: 'Gastró est',
        value: 76,
      },
      {
        id: 16,
        classId: 16,
        className: '12.D',
        activityId: 1,
        activity: 'Gastró est',
        value: 25,
      },
      ////////////////////////////////////////////////////////////////////
      {
        id: 17,
        classId: 1,
        className: '9.A',
        activityId: 2,
        activity: 'Just Dance',
        value: 75,
      },
      {
        id: 18,
        classId: 2,
        className: '9.B',
        activityId: 2,
        activity: 'Just Dance',
        value: 29,
      },
      {
        id: 19,
        classId: 3,
        className: '9.C',
        activityId: 2,
        activity: 'Just Dance',
        value: 25,
      },
      {
        id: 20,
        classId: 4,
        className: '9.D',
        activityId: 2,
        activity: 'Just Dance',
        value: 25,
      },
      {
        id: 21,
        classId: 5,
        className: '10.A',
        activityId: 2,
        activity: 'Just Dance',
        value: 56,
      },
      {
        id: 22,
        classId: 6,
        className: '10.B',
        activityId: 2,
        activity: 'Just Dance',
        value: 25,
      },
      {
        id: 23,
        classId: 7,
        className: '10.C',
        activityId: 2,
        activity: 'Just Dance',
        value: 25,
      },
      {
        id: 24,
        classId: 8,
        className: '10.D',
        activityId: 2,
        activity: 'Just Dance',
        value: 32,
      },
      {
        id: 25,
        classId: 9,
        className: '11.A',
        activityId: 2,
        activity: 'Just Dance',
        value: 25,
      },
      {
        id: 26,
        classId: 10,
        className: '11.B',
        activityId: 2,
        activity: 'Just Dance',
        value: 89,
      },
      {
        id: 27,
        classId: 11,
        className: '11.C',
        activityId: 2,
        activity: 'Just Dance',
        value: 25,
      },
      {
        id: 28,
        classId: 12,
        className: '11.D',
        activityId: 2,
        activity: 'Just Dance',
        value: 215,
      },
      {
        id: 29,
        classId: 13,
        className: '12.A',
        activityId: 2,
        activity: 'Just Dance',
        value: 21,
      },
      {
        id: 30,
        classId: 14,
        className: '12.B',
        activityId: 2,
        activity: 'Just Dance',
        value: 28,
      },
      {
        id: 31,
        classId: 15,
        className: '12.C',
        activityId: 2,
        activity: 'Just Dance',
        value: 23,
      },
      {
        id: 32,
        classId: 16,
        className: '12.D',
        activityId: 2,
        activity: 'Just Dance',
        value: 125,
      },
    ];

    return of(this.points);
  }

  getActivities(): Observable<ActivitiesElement[]> {
    this.activities = [
      { id: 1, name: 'Gastró est' },
      { id: 2, name: 'Just Dance' },
    ];

    return of(this.activities);
  }

  private handleError(error: HttpErrorResponse) {
    // return an observable with a user friendly message
    return throwError('Error! Something went wrong!');
  }
}
