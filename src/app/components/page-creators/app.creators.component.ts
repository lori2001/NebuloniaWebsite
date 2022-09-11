import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-creators',
  templateUrl: './app.creators.component.html',
  styleUrls: ['./app.creators.component.css'],
})
export class CreatorsComponent {
  clicks: number[] = [0, 0, 0, 0, 0];

  addClicksTo(index: number) {
    this.clicks[index]++;
  }
}
