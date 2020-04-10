import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PointsElement } from '../models/database/points.element';
import { ActivitiesElement } from '../models/database/activities.element';
import { AdminComponent } from '../components/page-admin/app.admin.component';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  baseUrl = 'api';
  points: PointsElement[];
  activities: ActivitiesElement[];
  errorcode: Observable<number>;
  modpassword: string;

  constructor(private http: HttpClient) { }

  getPoints(): Observable<PointsElement[]> {
    return this.http.get(`${this.baseUrl}/getPoints.php`).pipe(
      map((res) => {
        const dataKey = 'data';
        this.points = res[dataKey];
        return this.points;
    }),
    catchError(this.handleError));
  }

  getActivities(): Observable<ActivitiesElement[]> {
    return this.http.get(`${this.baseUrl}/getActivities.php`).pipe(
      map((res) => {
        const dataKey = 'data';
        this.activities = res[dataKey];
        return this.activities;
    }),
    catchError(this.handleError));
  }

  setPoints(data: any, messageService: MessageService) {
    this.http.post(`${this.baseUrl}/setPoints.php`, {
      data,
      password: this.modpassword
    }).subscribe(response => {
      messageService.add({
        key: 'custom',
        severity: 'success',
        summary: 'admin.messages.points-success.summary',
        detail: 'admin.messages.points-success.details'
      });
    });
  }

  createNewActivity(name: string, adminComponent: AdminComponent, messageService: MessageService) {
    this.http.post(`${this.baseUrl}/createActivity.php`, {
      data: name,
      password: this.modpassword
    }).subscribe(response => {
      messageService.add({
        key: 'custom',
        severity: 'success',
        summary: 'admin.messages.activity-creation-success.summary',
        detail: 'admin.messages.activity-creation-success.details'
      });
      adminComponent.ngOnInit();
    });
  }

  deleteActivity(name: string, adminComponent: AdminComponent, messageService: MessageService) {
    this.http.post(`${this.baseUrl}/deleteActivity.php`, {
      data: name,
      password: this.modpassword
    }).subscribe(response => {
      messageService.add({
        key: 'custom',
        severity: 'success',
        summary: 'admin.messages.activity-deletion-success.summary',
        detail: 'admin.messages.activity-deletion-success.details'
      });
      adminComponent.ngOnInit();
    });
  }

  login(password: string, adminComponent: AdminComponent, messageService: MessageService) {
    this.http.post(`${this.baseUrl}/login.php`, {
      data: password
    }).subscribe(response => {
      if (response === true) {
        adminComponent.isLogged = true;
        this.modpassword = password;
      } else {
        messageService.add({
          key: 'custom',
          severity: 'warn',
          summary: 'admin.messages.invalid-password.summary',
          detail: 'admin.messages.invalid-password.details'
        });
      }
    });
  }

  private handleError(error: HttpErrorResponse) {
    // return an observable with a user friendly message
    return throwError('Error! Something went wrong!');
  }
}
