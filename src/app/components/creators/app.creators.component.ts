import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-creators',
  templateUrl: './app.creators.component.html',
  styleUrls: ['./app.creators.component.css']
})
export class CreatorsComponent {
  clicks: number[] = [0, 0, 0, 0];

  constructor(private pointsService: PointsService) {
  }

  addClicksTo(index: number) {
    this.clicks[index]++;
  }

}
