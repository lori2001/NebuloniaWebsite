import { Component, OnInit, HostListener } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';
import { PointsElement } from 'src/app/models/database/points.element';
import { MessageService } from 'primeng/api';
import { ActivitiesElement } from 'src/app/models/database/activities.element';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-admin',
  templateUrl: './app.admin.component.html',
  styleUrls: ['./app.admin.component.css'],
  providers: [MessageService]
})
export class AdminComponent implements OnInit {
  messageMargin = '48px';
  isLogged = false;
  points: PointsElement[];
  activities: ActivitiesElement[];
  currentActivityId: number;

  constructor(private translate: TranslateService,
              private pointsService: PointsService,
              private messageService: MessageService) {
      // calculates message margin-top based on device width
      this.calcMessageMargin();
   }

   ngOnInit() {
    this.pointsService.getActivities().subscribe(
      (res: ActivitiesElement[]) => {
        this.activities = res;
        this.loadPoints(this.activities[0].id);
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

  @HostListener('window:resize', [])
  calcMessageMargin() {
    // adjusts message position relative to window size
    if (window.innerWidth < 768 && window.innerWidth > 370) {
      this.messageMargin = '-7px';
    } else {
      this.messageMargin = '48px';
    }
  }

  savePoints() {
    const info = {};
    const myTab = document.getElementById('pointsTable') as HTMLTableElement;
    const activityKey = 'activity';
    let error = false;

    info[activityKey] = this.currentActivityId;
    for (let i = 1; i < myTab.rows.length; i++) {
      const objCells = myTab.rows.item(i).cells;
      const num = parseInt(objCells.item(1).lastChild.textContent, 10);

      if (isNaN(num)) {
        error = true;
      }

      info[objCells.item(0).innerHTML.replace('.', '')] = num;
    }

    if (error) {
      this.messageService.add({
        key: 'custom',
        severity: 'warn',
        summary: 'admin.messages.points-input-error.summary',
        detail: 'admin.messages.points-input-error.details'
      });
    } else {
      this.pointsService.setPoints(info, this.messageService);
    }
  }

  loadPoints(activityId: number) {
    this.currentActivityId = activityId;
    this.pointsService.getPoints().subscribe(
      (res: PointsElement[]) => {
        this.points = this.sortPoints(res, activityId);
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

  sortPoints(pts: PointsElement[], activityId: number) {
    // delete points that don't belong to activity
    for (let i = pts.length - 1; i >= 0; i--) {
      // toString fixes weird bug...
      if (pts[i].activity_id.toString() !== activityId.toString()) {
        pts.splice(i, 1);
      }
    }
    return pts;
  }

  createActivity() {
    const name = (document.getElementById('newActNameBox') as HTMLInputElement).value;
    if (name !== '') {
      this.pointsService.createNewActivity(name, this, this.messageService);
      (document.getElementById('newActNameBox') as HTMLInputElement).value = '';
    } else {
      // No Valid Characters
      this.messageService.add({
        key: 'custom',
        severity: 'warn',
        summary: 'admin.messages.activity-name-error.summary',
        detail: 'admin.messages.activity-name-error.details'
      });
    }
  }

  deleteActivity() {
    const e = document.getElementById('actlist') as HTMLSelectElement;
    const nm = e.options[e.selectedIndex].value as string;

    if (confirm(this.translate.instant('admin.confirm-dialog-message') + e.options[e.selectedIndex].textContent)) {
      this.pointsService.deleteActivity(nm, this, this.messageService);
    }
  }

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
      if (event.key === 'Enter') {
        if (!this.isLogged) {
          this.login();
        } else {
          this.createActivity();
        }
      }
  }
  login() {
    this.pointsService.login((document.getElementById('passwordBox') as HTMLInputElement).value, this, this.messageService);
  }

  /* makes toasts' close-button work */
  onReject() {
    this.messageService.clear('custom');
  }
}
