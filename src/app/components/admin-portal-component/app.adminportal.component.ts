import { Component, OnInit, HostListener } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';
import { PointsElement } from 'src/app/models/database/points.element';
import { MessageService } from 'primeng/components/common/messageservice';
import { ActivitiesElement } from 'src/app/models/database/activities.element';

@Component({
  selector: 'app-admin-portal-component',
  templateUrl: './app.adminportal.component.html',
  styleUrls: ['./app.adminportal.component.css']
})
export class AdminPortalComponent implements OnInit {
  loginned = false;
  message_margin = '48px';
  points: PointsElement[];
  activities: ActivitiesElement[];
  currentActivity: number;

  constructor(private pointsService: PointsService/*,
              private messageService: MessageService*/) {
      this.calcAspectRatio();
   }

   ngOnInit() {
    this.pointsService.getActivities().subscribe(
      (res: ActivitiesElement[]) => {
        this.activities = res;
        var nm = this.activities[0].id;
        this.loadPoints(nm);
      },
      (error) => {
        if (error !== null) {
          /*this.messageService.add({
            key: 'custom',
            severity: 'warn',
            summary: 'points.error.summary',
            detail: 'points.error.detail'
          });*/
        }
      }
    );
    
  }

  @HostListener('window:resize', ['$event'])
  calcAspectRatio() {
    // adjusts message position relative to window size
    if (window.innerWidth < 768 && window.innerWidth > 370) {
      this.message_margin = '-7px';
    } else {
      this.message_margin = '48px';
    }
  }

  savePoints() {
    var info = {};
    var myTab = <HTMLTableElement>document.getElementById('pointsTable');
    info['activity'] = this.currentActivity;
    for (var i = 1; i < myTab.rows.length; i++) {
      var objCells = myTab.rows.item(i).cells;
        info[objCells.item(0).innerHTML.replace(".", "")] = parseInt(objCells.item(1).lastChild.textContent, 10);
    }
    this.pointsService.setPoints(info);
  }

  loadPoints(activity: number) {
    this.currentActivity = activity;
    var pts: PointsElement[];
    this.pointsService.getPoints().subscribe(
      (res: PointsElement[]) => {
        pts = res;
        this.sortPoints(pts, activity);
      },
      (error) => {
        if (error !== null) {
          /*this.messageService.add({
            key: 'custom',
            severity: 'warn',
            summary: 'points.error.summary',
            detail: 'points.error.detail'
          });*/
        }
      }
    );
  }

  sortPoints(pts: PointsElement[], activity: number) {
    for(var i = pts.length - 1; i >= 0; i--)
    {
      if(pts[i].activity_id != activity)
      {
        pts.splice(i, 1);
      }
    }
    this.points = pts;
  }

  createActivity() {
    var name = (<HTMLInputElement>document.getElementById("newActNameBox")).value;
    this.pointsService.createNewActivity(name, this);
  }

  deleteActivity() {
    var e = document.getElementById("actlist") as HTMLSelectElement;
    var nm = e.options[e.selectedIndex].value as string;
    if(confirm("Are you sure to delete activity '" + e.options[e.selectedIndex].textContent + "'?")) {
      this.pointsService.deleteActivity(nm, this);
    }
  }

  login() {
    this.pointsService.login((<HTMLInputElement>document.getElementById("passwordBox")).value, this);
  }

  /* makes toasts' close-button work */
  /*onReject() {
    this.messageService.clear('custom');
  }*/
}
