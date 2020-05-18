import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EsportsTeamElement } from '../models/database/esportsteam.element';

@Injectable({
  providedIn: 'root'
})
export class EsportsService {
  baseUrl = 'api/esports-event';
  teams: EsportsTeamElement[];
  streamLinks: Map<string, string>;
  errorcode: Observable<number>;

  constructor(private http: HttpClient) { }

  getTeams(): Observable<EsportsTeamElement[]> {
    return this.http.get(`${this.baseUrl}/getEsportsTeams.php`).pipe(
      map((res) => {
        const dataKey = 'data';
        this.teams = res[dataKey];
        return this.teams;
    }),
    catchError(this.handleError));
  }

  getStreamLinks(): Observable<Map<string, string>> {
    return this.http.get(`${this.baseUrl}/getEsportsStreamLinks.php`).pipe(
      map((res) => {
        const dataKey = 'data';
        this.streamLinks = res[dataKey];
        return this.streamLinks;
    }),
    catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    // return an observable with a user friendly message
    return throwError('Error! Something went wrong!');
  }
}