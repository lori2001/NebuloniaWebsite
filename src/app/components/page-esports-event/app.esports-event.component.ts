import { Component, OnInit, HostListener, Input } from '@angular/core';
import { EsportsService } from 'src/app/services/esports.service';
import { EsportsTeamElement } from 'src/app/models/database/esportsteam.element';
import { MessageService } from 'primeng/api';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-esports-event',
  templateUrl: './app.esports-event.component.html',
  styleUrls: ['./app.esports-event.component.css'],
  providers: [MessageService]
})
export class EsportsEventComponent implements OnInit {
  messageMargin = '48px';

  esportsTeams: EsportsTeamElement[];
  esportsStreamLinks: Map<string, string>;

  teams: Map<string, Map<string, string[]>>; // key game, key teamname => members

  embedLinks: Map<string, SafeResourceUrl>;
  separator = '|';

  @Input() notification = false;

  constructor(private messageService: MessageService,
              private esportsService: EsportsService,
              private domSanitizer: DomSanitizer) {
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
          this.teams.get(element.game).set(element.name, this.getArrayOfMembers(element.members));
        });
      },
      (error) => {
        if (error !== null) {
          this.messageService.add({
            key: 'custom',
            severity: 'warn',
            summary: 'admin.messages.connection-error.summary',
            detail: 'admin.messages.connection-error.details'
          });
        }
      }
    );

    this.embedLinks = new Map<string, SafeResourceUrl>();
    this.esportsStreamLinks = new Map<string, string>();
    this.esportsService.getStreamLinks().subscribe(
      (res: Map<string, string>) => {
        this.esportsStreamLinks = res;
        for (const key in res) {
          this.embedLinks.set(key, this.getLink(key, true));
        }
      },
      (error) => {
        if (error !== null) {
          this.messageService.add({
            key: 'custom',
            severity: 'warn',
            summary: 'admin.messages.connection-error.summary',
            detail: 'admin.messages.connection-error.details'
          });
        }
      }
    );
  }

  getLink(key: string, embed: boolean) {
    if (embed) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/' + this.esportsStreamLinks[key]);
    } else {
      return this.domSanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/watch?v=' + this.esportsStreamLinks[key]);
    }
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
