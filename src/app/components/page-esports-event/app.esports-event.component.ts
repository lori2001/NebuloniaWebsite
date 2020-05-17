import { Component, OnInit, HostListener } from '@angular/core';
import { EsportsService } from 'src/app/services/esports.service';
import { EsportsTeamElement } from 'src/app/models/database/esportsteam.element';
import { MessageService } from 'primeng/api';
import { DomSanitizer } from '@angular/platform-browser';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(private messageService: MessageService,
              private esportsService: EsportsService,
              private domSanitizer: DomSanitizer) {
      // calculates message margin-top based on device width
      this.calcMessageMargin();
  }

  ngOnInit() {
    this.esportsService.getTeams().subscribe(
      (res: EsportsTeamElement[]) => {
        this.esportsTeams = res;
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
    this.esportsService.getStreamLinks().subscribe(
      (res: Map<string, string>) => {
        this.esportsStreamLinks = res;
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
