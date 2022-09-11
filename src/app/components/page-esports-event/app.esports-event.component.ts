import { Component, HostListener, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/api';
import { EsportsTeamElement } from 'src/app/models/database/esportsteam.element';
import { EsportsService } from 'src/app/services/esports.service';

@Component({
  selector: 'app-esports-event',
  templateUrl: './app.esports-event.component.html',
  styleUrls: ['./app.esports-event.component.css'],
  providers: [MessageService],
})
export class EsportsEventComponent implements OnInit {
  messageMargin = '48px';

  esportsTeams: EsportsTeamElement[];
  esportsStreamLinks = new Map<string, string>([
    ['League of Legends', 'https://youtube.com/watch?v=MgDhWQ8OI3E'],
    ['Rocket League', 'https://youtube.com/watch?v=g50iPquVqHY'],
  ]);

  embedLinks = new Map<string, SafeResourceUrl>([
    [
      'League of Legends',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'https://youtube.com/embed/MgDhWQ8OI3E'
      ),
    ],
    [
      'Rocket League',
      this.domSanitizer.bypassSecurityTrustResourceUrl(
        'https://youtube.com/embed/g50iPquVqHY'
      ),
    ],
  ]);

  teams: Map<string, Map<string, string[]>>; // key game, key teamname => members

  separator = '|';

  @Input() notification = false;

  constructor(
    private messageService: MessageService,
    private esportsService: EsportsService,
    private translate: TranslateService,
    private domSanitizer: DomSanitizer
  ) {
    // calculates message margin-top based on device width
    this.calcMessageMargin();
  }

  ngOnInit() {
    this.teams = new Map<string, Map<string, string[]>>();
    this.esportsService.getTeams().subscribe(
      (res: EsportsTeamElement[]) => {
        this.esportsTeams = res;
        this.esportsTeams.forEach((element: EsportsTeamElement) => {
          if (!this.teams.has(element.game)) {
            this.teams.set(element.game, new Map<string, string[]>());
          }
          this.teams
            .get(element.game)
            .set(element.name, this.getArrayOfMembers(element.members));
        });
      },
      (error) => {
        if (error !== null) {
          this.messageService.add({
            key: 'custom',
            severity: 'warn',
            summary: this.translate.instant(
              'admin.messages.connection-error.summary'
            ),
            detail: this.translate.instant(
              'admin.messages.connection-error.details'
            ),
          });
        }
      }
    );
  }

  getArrayOfMembers(membersSource: string) {
    return membersSource.split(this.separator);
  }

  getTeamsIteration(game: string) {
    return this.teams.get(game);
  }

  @HostListener('window:resize', [])
  calcMessageMargin() {
    // adjusts message position relative to window size
    if (window.innerWidth < 768 && window.innerWidth > 370) {
      this.messageMargin = '-7px';
    } else {
      this.messageMargin = '48px';
    }
  }

  /* makes toasts' close-button work */
  onReject() {
    this.messageService.clear('custom');
  }
}
