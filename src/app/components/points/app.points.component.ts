import { Component, HostListener } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-points',
  templateUrl: './app.points.component.html',
  styleUrls: ['./app.points.component.css']
})
export class PointsComponent {

  aspectRatio: number; // width/height ratio
  staticFlags = false;

  layoutTypes = ['1x4', '2x2', '4x1']; // all types of layout used
  currentLayout = this.layoutTypes[0]; // holds the layout currently in use

  constructor(private deviceService: DeviceDetectorService) {
    this.calcAspectRatio();

    if (this.deviceService.browser === 'MS-Edge' ||
        this.deviceService.browser === 'FB-Messanger' ||
        this.deviceService.browser === 'Safari') {
      this.staticFlags = true;
    }
  }

  table: boolean[] = [false, false, false, false]; // if true the table is shown
  blocker: boolean[] = [false, false, false, false]; // used to block table collapse

  toggleTable(num: number) {
    this.table[num] = !this.table[num];
    for (let i = 0; i < 4; i++) {
      this.blocker[i] = false;
    }
  }

  @HostListener('document:click', ['$event']) // calls function whenever clicked anywhere on screen
  clickedOutside() {
    for (let i = 0; i < 4; i++) {
      if (this.blocker[i]) {
        this.table[i] = false;
      }
      if (this.table[i]) {
        this.blocker[i] = true;
      }
    }
  }

  @HostListener('window:resize', ['$event'])
  calcAspectRatio() {
    // changes layout type based on width and aspect ratio
    this.aspectRatio = window.innerWidth / window.innerHeight;

    // changes layout type based on width and aspect ratio
    if (this.aspectRatio >= 1.1) { // 5/4
        this.currentLayout = this.layoutTypes[0];
    }
    if (window.innerWidth < 768 || (this.aspectRatio < 1.1 && this.aspectRatio >= 0.6)) {
        this.currentLayout = this.layoutTypes[1];
    }
    if (window.innerWidth < 450 || this.aspectRatio < 0.6) {
      this.currentLayout = this.layoutTypes[2];
    }
  }
}

