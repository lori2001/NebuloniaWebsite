import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { EsportsTeamElement } from '../models/database/esportsteam.element';

@Injectable({
  providedIn: 'root',
})
export class EsportsService {
  teams: EsportsTeamElement[];

  constructor(private http: HttpClient) {}

  getTeams(): Observable<EsportsTeamElement[]> {
    this.teams = [
      {
        name: 'The Big Flex',
        members:
          'FusterCluck13 - Fleischman Raul|Just a Wannabe - Schwetter Loránd|aGalamb - Fleischman Krisztián|CL0S3R - Balogh Dávid|Zidane - Fejér Krisztián',
        game: 'League of Legends',
      },
      {
        name: 'NL2H',
        members:
          'NepROst12 - Cichi Loránt|DuckingBrilliant - Szőke Loránd|Kiraly13 - Szőke Hunor|RhinoPower - Steiger Norbert|nightshaine - Bakó Norbert|son of muki - Vajda Aniszia',
        game: 'League of Legends',
      },
      {
        name: 'qBan',
        members:
          'NoobMast3r69 - Dezső Bálint|NoobMást3r69 - Könczei István|gEkko Ekko - Ungureanu Robert|DOUGHNUTS17 -  Barti Dávid|BlooXP - Igyártó Szabolcs',
        game: 'League of Legends',
      },
      {
        name: 'Team1 1v1',
        members: 'Antrakinon - Kelemen Tamás',
        game: 'Rocket League',
      },
      {
        name: 'Team2 1v1',
        members: 'Rebelrob21 - Kónya Előd Róbert',
        game: 'Rocket League',
      },
      {
        name: 'Team3 1v1',
        members: 'TurboDiesel ^-^ - Bereczki Tamás',
        game: 'Rocket League',
      },
      {
        name: 'Team4 1v1',
        members: 'Pipszi Popszi Opszokopolisz - Szentpáli Levente',
        game: 'Rocket League',
      },
      {
        name: 'Team5 1v1',
        members: 'Beatee - Bálint Tamás',
        game: 'Rocket League',
      },
    ];

    return of(this.teams);
  }
}
