import { Component, OnInit } from '@angular/core';
import { ActivityElement } from 'src/app/models/database/activity.element';
import { ClassElement } from 'src/app/models/database/class.element';
import { PointElement } from 'src/app/models/database/points.element';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-creators',
  templateUrl: './app.creators.component.html',
  styleUrls: ['./app.creators.component.css']
})
export class CreatorsComponent implements OnInit {
  activities: ActivityElement[];
  classes: ClassElement[];
  points: PointElement[];
  error = '';
  success = '';

  constructor(private pointsService: PointsService) {
  }

  ngOnInit() {
    this.getPoints();
  }

  getPoints(): void {
    this.pointsService.getActivities().subscribe(
      (res: ActivityElement[]) => {
        this.activities = res;
      },
      (err) => {
        this.error = err;
      }
    );
    this.pointsService.getClasses().subscribe(
      (res: ClassElement[]) => {
        this.classes = res;
      },
      (err) => {
        this.error = err;
      }
    );
    this.pointsService.getPoints().subscribe(
      (res: PointElement[]) => {
        this.points = res;
      },
      (err) => {
        this.error = err;
      }
    );
  }

}
