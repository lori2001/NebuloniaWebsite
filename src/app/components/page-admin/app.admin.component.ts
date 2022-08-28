import { Component, HostListener, OnInit } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
import { MessageService } from "primeng/api";
import { ActivitiesElement } from "src/app/models/database/activities.element";
import { PointsElement } from "src/app/models/database/points.element";
import { PointsService } from "src/app/services/points.service";

@Component({
  selector: "app-admin",
  templateUrl: "./app.admin.component.html",
  styleUrls: ["./app.admin.component.css"],
  providers: [MessageService],
})
export class AdminComponent implements OnInit {
  messageMargin = "48px";
  isLogged = false;
  points: PointsElement[];
  activities: ActivitiesElement[];
  currentActivityId: number;

  constructor(
    private translate: TranslateService,
    private pointsService: PointsService,
    private messageService: MessageService
  ) {
    // calculates message margin-top based on device width
    this.calcMessageMargin();
  }

  ngOnInit() {
    this.pointsService.getActivities().subscribe(
      (res: ActivitiesElement[]) => {
        this.activities = res;
        this.loadPoints(this.activities[0].id);
      },
      (error) => {
        if (error !== null) {
          this.messageService.add({
            key: "custom",
            severity: "warn",
            summary: this.translate.instant(
              this.translate.instant("admin.messages.connection-error.summary")
            ),
            detail: this.translate.instant(
              "admin.messages.connection-error.details"
            ),
          });
        }
      }
    );
  }

  @HostListener("window:resize", [])
  calcMessageMargin() {
    // adjusts message position relative to window size
    if (window.innerWidth < 768 && window.innerWidth > 370) {
      this.messageMargin = "-7px";
    } else {
      this.messageMargin = "48px";
    }
  }

  loadPoints(activityId: number) {
    this.currentActivityId = activityId;
    this.pointsService.getPoints().subscribe(
      (res: PointsElement[]) => {
        this.points = this.sortPoints(res, activityId);
      },
      (error) => {
        if (error !== null) {
          this.messageService.add({
            key: "custom",
            severity: "warn",
            summary: this.translate.instant(
              "admin.messages.connection-error.summary"
            ),
            detail: this.translate.instant(
              "admin.messages.connection-error.details"
            ),
          });
        }
      }
    );
  }

  sortPoints(pts: PointsElement[], activityId: number) {
    // delete points that don't belong to activity
    for (let i = pts.length - 1; i >= 0; i--) {
      // toString fixes weird bug...
      if (pts[i].activity_id.toString() !== activityId.toString()) {
        pts.splice(i, 1);
      }
    }
    return pts;
  }

  createActivity() {
    const name = (document.getElementById("newActNameBox") as HTMLInputElement)
      .value;
    if (name !== "") {
      this.messageService.add({
        key: "custom",
        severity: "warn",
        summary: this.translate.instant("demo.blocked-msg-summary"),
        detail: this.translate.instant("demo.blocked-msg-details"),
      });
      (document.getElementById("newActNameBox") as HTMLInputElement).value = "";
    } else {
      // No Valid Characters
      this.messageService.add({
        key: "custom",
        severity: "warn",
        summary: this.translate.instant(
          "admin.messages.activity-name-error.summary"
        ),
        detail: this.translate.instant(
          "admin.messages.activity-name-error.details"
        ),
      });
    }
  }

  showBlockedMsg() {
    this.messageService.add({
      key: "custom",
      severity: "warn",
      summary: this.translate.instant("demo.blocked-msg-summary"),
      detail: this.translate.instant("demo.blocked-msg-details"),
    });
  }

  @HostListener("document:keypress", ["$event"])
  handleKeyboardEvent(event: KeyboardEvent) {
    if (event.key === "Enter") {
      if (!this.isLogged) {
        this.login();
      } else {
        this.createActivity();
      }
    }
  }
  login() {
    this.isLogged = true;
  }

  /* makes toasts' close-button work */
  onReject() {
    this.messageService.clear("custom");
  }
}
