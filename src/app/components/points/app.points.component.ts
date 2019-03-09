import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PointsElement } from 'src/app/models/database/points.element';
import { PointsService } from 'src/app/services/points.service';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-points',
  templateUrl: './app.points.component.html',
  styleUrls: ['./app.points.component.css'],
  providers: [MessageService]
})
export class PointsComponent implements OnInit {

  aspectRatio: number; // width/height ratio
  message_margin = '48px'; // the margin that the error toast has
  staticFlags = false; // true if the flags should be static on some browsers(ex.Edge)

  layoutTypes = ['1x4', '2x2', '4x1']; // all types of layout used
  currentLayout = this.layoutTypes[0]; // holds the layout currently in use
  points: PointsElement[]; // hold server information of classes' points
  totalpoints: number[] = [0, 0, 0, 0]; // holds the points total of each 'house'

  table: boolean[] = [false, false, false, false]; // if true the table is shown
  blocker: boolean[] = [false, false, false, false]; // used to block table collapse

  constructor(private deviceService: DeviceDetectorService,
              private pointsService: PointsService,
              private messageService: MessageService) {
    this.calcAspectRatio();

    if (this.deviceService.browser === 'MS-Edge' ||
        this.deviceService.browser === 'FB-Messanger' ||
        this.deviceService.browser === 'Safari') {
      this.staticFlags = true;
    }
  }

  ngOnInit() {
    this.pointsService.getPoints().subscribe(
      (res: PointsElement[]) => {
        this.points = res;

        for (let i = 0; i < 16; i++) { // for each class and grade
          this.totalpoints[i % 4] += res[i].value; // i % 4 for all(4) types add coressponding classes
        }
      },
      (error) => {
        if (error !== null) {
          this.messageService.add({
            key: 'custom',
            severity: 'warn',
            summary: 'points.error.summary',
            detail: 'points.error.detail'
          });
        }
      }
    );
  }

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

    // adjusts message position relative to window size
    if (window.innerWidth < 768 && window.innerWidth > 370) {
      this.message_margin = '-7px';
    } else {
      this.message_margin = '48px';
    }
  }

  /* makes toasts' close-button work */
  onReject() {
    this.messageService.clear('custom');
  }
}

