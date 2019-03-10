import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-creators',
  templateUrl: './app.creators.component.html',
  styleUrls: ['./app.creators.component.css']
})
export class CreatorsComponent {
  clicks = 0;
  test: number[] = [ 1, 2, 3, 4, 5, 6];

  constructor(private pointsService: PointsService) {
  }

}
