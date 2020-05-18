import { Component, OnInit, HostListener } from '@angular/core';
import { EsportsService } from 'src/app/services/esports.service';
import { EsportsTeamElement } from 'src/app/models/database/esportsteam.element';
import { MessageService } from 'primeng/api';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { EsportsLinkElement } from 'src/app/models/database/esportslink.element';

@Component({
  selector: 'app-esports-event',
  templateUrl: './app.esports-event.component.html',
  styleUrls: ['./app.esports-event.component.css'],
  providers: [MessageService]
})
export class EsportsEventComponent implements OnInit {
  messageMargin = '48px';

  gameNames: string[]; // array of game names  
  links: SafeResourceUrl[]; // full link of the game with index I
  teamsName: string[][]; // array of team names in games with index i 
  teamMembers: string[][]; // array of team members in teams with index j

  // observables
  esportsTeams: EsportsTeamElement[];
  esportsStreamLinks: EsportsLinkElement[];

  separator = '|'; // character (or string) that separates team members from one another

  constructor(private messageService: MessageService,
              private esportsService: EsportsService,
              private domSanitizer: DomSanitizer) {
      // calculates message margin-top based on device width
      this.calcMessageMargin();
  }

  ngOnInit() {
    this.esportsService.getStreamLinks().subscribe(
      (res: EsportsLinkElement[]) => {
        this.esportsStreamLinks = res;

        for(const element of this.esportsStreamLinks) {
          this.gameNames.push(element.game);
          this.links.push(this.domSanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/' + element.link));
        }

        this.esportsService.getTeams().subscribe(
          (res: EsportsTeamElement[]) => {
            this.esportsTeams = res;
    
            for(let element of this.esportsTeams) {
                let i = this.gameNames.indexOf(element.game);
                if(i > -1) { // if game already exists
                  // create team
                  this.teamsName[i].push(element.name);
                  this.teamMembers[this.teamsName.length - 1] = this.getArrayOfMembers(element.members);
                }
                else { // if game doesn't already exist throw error
                  this.messageService.add({
                    key: 'custom',
                    severity: 'warn',
                    summary: 'admin.messages.connection-error.summary',
                    detail: 'admin.messages.connection-error.details'
                  });
                }
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

 /* getLink(key: string, embed: boolean) {
    if (embed) {
      return this.domSanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/embed/' + this.esportsStreamLinks[key]);
    } else {
      return this.domSanitizer.bypassSecurityTrustResourceUrl('https://youtube.com/watch?v=' + this.esportsStreamLinks[key]);
    }
  }*/

  // return username - Full Name in array
  getArrayOfMembers(membersSource: string) {
    let names = membersSource.split(this.separator);
    return names;
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
