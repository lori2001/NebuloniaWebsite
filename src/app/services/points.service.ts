import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PointsElement } from '../models/database/points.element';
import { ActivitiesElement } from '../models/database/activities.element';
import { AdminPortalComponent } from '../components/admin-portal-component/app.adminportal.component';

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
        this.points = res['data'];
        return this.points;
    }),
    catchError(this.handleError));
  }

  getActivities(): Observable<ActivitiesElement[]> {
    return this.http.get(`${this.baseUrl}/getActivities.php`).pipe(
      map((res) => {
        this.activities = res['data'];
        return this.activities;
    }),
    catchError(this.handleError));
  }

  setPoints(data) {
    this.http.post(`${this.baseUrl}/setPoints.php`, {data: data, password: this.modpassword}).subscribe(response=>{alert('Task failed successfully!');});
  }

  createNewActivity(name: string, portalcomp: AdminPortalComponent) {
    this.http.post(`${this.baseUrl}/createActivity.php`, {data: name, password: this.modpassword}).subscribe(response=>{alert('New activity created successfully!'); portalcomp.ngOnInit(); });
  }

  deleteActivity(name: string, portalcomp: AdminPortalComponent) {
    this.http.post(`${this.baseUrl}/deleteActivity.php`, {data: name, password: this.modpassword}).subscribe(response=>{alert('Activity deleted successfully!'); portalcomp.ngOnInit(); });
  }

  login(password: string, portalcomp: AdminPortalComponent) {
    this.http.post(`${this.baseUrl}/login.php`, {data: password}).subscribe(response=>{if(response.toString() == "True") { portalcomp.loginned = true; this.modpassword = password; } else alert("Invalid password"); });
  }

  private handleError(error: HttpErrorResponse) {
    // return an observable with a user friendly message
    return throwError('Error! Something went wrong!');
  }
}
