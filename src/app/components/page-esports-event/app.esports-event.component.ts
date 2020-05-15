import { Component, OnInit, HostListener } from '@angular/core';
import { PointsService } from 'src/app/services/points.service';
import { PointsElement } from 'src/app/models/database/points.element';
import { MessageService } from 'primeng/api';
import { ActivitiesElement } from 'src/app/models/database/activities.element';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-esports-event',
  templateUrl: './app.esports-event.component.html',
  styleUrls: ['./app.esports-event.component.css'],
  providers: [MessageService]
})
export class EsportsEventComponent implements OnInit {
  messageMargin = '48px';

  constructor(private messageService: MessageService) {
      // calculates message margin-top based on device width
      this.calcMessageMargin();
  }

  ngOnInit() {

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

  /* makes toasts' close-button work */
  onReject() {
    this.messageService.clear('custom');
  }
}
