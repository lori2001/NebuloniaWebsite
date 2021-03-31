import { Component, HostListener, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { PointsElement } from 'src/app/models/database/points.element';
import { PointsService } from 'src/app/services/points.service';
import { MessageService } from 'primeng/api';
import { jsPDF } from 'jspdf';

@Component({
  selector: 'app-points',
  templateUrl: './app.points.component.html',
  styleUrls: ['./app.points.component.css'],
  providers: [MessageService]
})
export class PointsComponent implements OnInit {

  aspectRatio: number; // width/height ratio
  messageMargin = '48px'; // the margin that the error toast has
  staticFlags = false; // true if the flags should be static on some browsers(ex.Edge)

  layoutTypes = ['1x4', '2x2', '4x1']; // all types of layout used
  currentLayout = this.layoutTypes[0]; // holds the layout currently in use
  points: PointsElement[]; // hold server information for all types of points
  classPoints: Array<{ value: number, name: string}> = []; // holds the points total and name of each class
  totalPoints: number[] = [0, 0, 0, 0]; // holds the points total of each 'house'

  table: boolean[] = [true, true, true, true]; // if true the table is shown
  blocker: boolean[] = [false, false, false, false]; // used to block table collapse

  constructor(private deviceService: DeviceDetectorService,
              private pointsService: PointsService,
              private messageService: MessageService) {
    this.calcAspectRatio();

    if (this.deviceService.browser === 'MS-Edge' ||
        this.deviceService.browser === 'FB-Messanger' || // no, i didn't type this wrong
        this.deviceService.browser === 'Safari') {
      this.staticFlags = true;
    }
  }

  ngOnInit() {
    this.pointsService.getPoints().subscribe(
      (res: PointsElement[]) => {
        this.points = res;

        if (this.points.length === 0) {
          this.pointsService.getClasses().subscribe(
            (result: string[]) => {
              for (const element of result) {
                this.classPoints.push({value: 0, name: element});
              }
            });
        } else {
          for (const element of this.points) {
            // for each point ever given
            // adds together the points of all classes
            // 9.A, 9.B, 9.C, 9.D, 10.A, 10.B stb..
             if (element.class_id - 1 >= this.classPoints.length) {
              this.classPoints.push({value: element.value, name: element.className});
             } else {
              this.classPoints[(element.class_id - 1)].value += element.value;
             }
           }

          for (let i = 0; i < this.classPoints.length; i++) {
            // adds together the total points of each "house"
            // 0-A 1-B 2-C 3-D
            this.totalPoints[i % 4] += this.classPoints[i].value;
          }
        }
      },
      (error) => {
        if (error !== null) {
          this.messageService.add({
            key: 'custom',
            severity: 'warn',
            summary: 'points.error-message.summary',
            detail: 'points.error-message.details'
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

  @HostListener('document:click', []) // calls function whenever clicked anywhere on screen
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

  @HostListener('window:resize', [])
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
      this.messageMargin = '-7px';
    } else {
      this.messageMargin = '48px';
    }
  }

  /* makes toasts' close-button work */
  onReject() {
    this.messageService.clear('custom');
  }

   public downloadPDF() {
    const doc = new jsPDF();

    /*Title*/
    doc.setFontSize(20);
    doc.text('Osztálypontok', 83, 15);

    /*Footer*/
    doc.setFontSize(10);
    doc.text('Készítette: Szõke András-Loránd', 155, 295);
    doc.setFontSize(8);

    let Ypos = 25;
    let Xpos = 0;

    for (let i = 0; i < this.points.length; i++) { // for each class and grade

      if (i > 0 && this.points[i - 1].activity !== this.points[i].activity) {
        Ypos += 5;
      }

      if (Ypos >= 275 && Xpos >= 140) {
        doc.addPage();
        Ypos = 25;
        Xpos = 0;

        /*Footer*/
        doc.setFontSize(10);
        doc.text('Készítette: Szõke András-Loránd', 155, 295);
        doc.setFontSize(8);
      } else if (Ypos >= 275) {
        Xpos += 70;
        Ypos = 25;
      }

      doc.text(this.points[i].className, Xpos + 10, Ypos);
      doc.text(this.points[i].activity.toString(), Xpos + 18, Ypos);
      doc.text(this.points[i].value.toString(), Xpos + 50, Ypos);

      Ypos += 5;
    }

    doc.save('osztalypontok.pdf');
  }
}

