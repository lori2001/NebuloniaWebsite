import { Component, OnInit } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';

@Component({
  selector: 'app-creators',
  templateUrl: './app.creators.component.html',
  styleUrls: ['./app.creators.component.css']
})
export class CreatorsComponent {

  constructor(private pointsService: PointsService) {
  }

}
