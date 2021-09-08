import { Component, HostListener } from "@angular/core";
import { PresidentsElement } from "src/app/models/presidents.element";
import { LinkElement } from "src/app/models/link.element";

@Component({
  selector: "app-main",
  templateUrl: "./app.main.component.html",
  styleUrls: ["./app.main.component.css"],
})
export class MainComponent {
  presidents: PresidentsElement[];
  sponsors: LinkElement[];

  // due to mobile mode's small menu the offset of navigation icons should change
  offset = -48;

  constructor() {
    this.calcOffset();

    // if images or names don't change there max be a catching issue
    // fix images by changing 2019 to your year's number
    // fix names by changing version number of translation .json files
    this.presidents = [
      {
        url: "../../../assets/images/presidents2019/vice_president.jpg",
        name: "Kelemen Tamás",
        position: "presidents.vice_president",
      },
      {
        url: "../../../assets/images/presidents2019/president.jpg",
        name: "Nagy Tibor",
        position: "presidents.president",
      },
      {
        url: "../../../assets/images/presidents2019/technical.jpg",
        name: "Szőke András-Loránd",
        position: "presidents.technical",
      },
      {
        url: "../../../assets/images/presidents2019/human_resources.jpg",
        name: "Nagy Tamás",
        position: "presidents.human_resources",
      },
      {
        url: "../../../assets/images/presidents2019/foreign_secretary.jpg",
        name: "Bokor Tünde",
        position: "presidents.foreign_secretary",
      },
      {
        url: "../../../assets/images/presidents2019/radio.jpg",
        name: "Lázár Miklós Hunor",
        position: "presidents.radio",
      },
      {
        url: "../../../assets/images/presidents2019/documentations.jpg",
        name: "Szekrény Eveline",
        position: "presidents.documentations",
      },
      {
        url: "../../../assets/images/presidents2019/financial.jpg",
        name: "Benedek Orsolya",
        position: "presidents.financial",
      },
    ];

    // at least 7 items are recommended
    this.sponsors = [
      { url: "../../../assets/images/sponsors/sponsor1.jpg" },
      { url: "../../../assets/images/sponsors/sponsor2.jpg" },
      { url: "../../../assets/images/sponsors/sponsor3.jpg" },
      { url: "../../../assets/images/sponsors/sponsor4.jpg" },
      { url: "../../../assets/images/sponsors/sponsor5.jpg" },
      { url: "../../../assets/images/sponsors/sponsor6.jpg" },
      { url: "../../../assets/images/sponsors/sponsor7.jpg" },
    ];
  }

  @HostListener("window:resize", [])
  calcOffset() {
    if (window.innerWidth < 768) {
      this.offset = 0;
    } else {
      this.offset = -48;
    }
  }
}
