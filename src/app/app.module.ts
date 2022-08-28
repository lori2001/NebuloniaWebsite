import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

// import ngx-translate and the http loader
import { HttpClient, HttpClientModule } from "@angular/common/http";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";

// device detector
import { DeviceDetectorModule } from "ngx-device-detector";

// owl carousel
import { CarouselModule } from "ngx-owl-carousel-o";

// scrolling (somewhat part of routing)
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";

// lazy load
import { LazyLoadImageModule } from "ng-lazyload-image";

// primeng
import { ButtonModule } from "primeng/button";
import { InputTextModule } from "primeng/inputtext";
import { InputTextareaModule } from "primeng/inputtextarea";
import { PasswordModule } from "primeng/password";
import { ToastModule } from "primeng/toast";

// manages which component gets displayed and when
import { AppRoutingModule } from "./app.routes";

// import components
import { AppComponent } from "./app.component";
import { LanguageComponent } from "./app.language.component";
import { FooterComponent } from "./components/comp-footer/app.footer.component";
import { NavbarComponent } from "./components/comp-navbar/app.navbar.component";
import { PresidentsComponent } from "./components/comp-presidents/app.presidents.component";
import { WorkInProgressComponent } from "./components/comp-work-in-progress/app.work-in-progress.component";
import { AdminComponent } from "./components/page-admin/app.admin.component";
import { ArchiveComponent } from "./components/page-archive/app.archive.component";
import { YearComponent } from "./components/page-archive/comp-year/app.year.component";
import { CreatorsComponent } from "./components/page-creators/app.creators.component";
import { EsportsEventComponent } from "./components/page-esports-event/app.esports-event.component";
import { MainComponent } from "./components/page-main/app.main.component";
import { AboutComponent } from "./components/page-main/comp-about/app.about.component";
import { ContactComponent } from "./components/page-main/comp-contact/app.contact.component";
import { EventsComponent } from "./components/page-main/comp-events/app.events.component";
import { HomeComponent } from "./components/page-main/comp-home/app.home.component";
import { SponsorsComponent } from "./components/page-main/comp-sponsors/app.sponsors.component";
import { NotFoundComponent } from "./components/page-not-found/app.not-found.component";
import { PointsComponent } from "./components/page-points/app.points.component";

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent, // Contains language component
    LanguageComponent, // Contains routing

    // Pages
    MainComponent,
    ArchiveComponent,
    PointsComponent,
    CreatorsComponent,
    NotFoundComponent, // 404 Page
    AdminComponent,

    // Special pages (used only on special ocassions)
    EsportsEventComponent,
    WorkInProgressComponent,

    // Other Components
    NavbarComponent,
    FooterComponent,
    PresidentsComponent,
    HomeComponent,
    AboutComponent,
    EventsComponent,
    ContactComponent,
    SponsorsComponent,
    YearComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    // detection of browsers and devices
    DeviceDetectorModule.forRoot(),

    // scrolling
    ScrollToModule.forRoot(),

    // lazy load
    LazyLoadImageModule,

    // routing
    AppRoutingModule,

    // owl carousel
    CarouselModule,

    // primeng
    InputTextareaModule,
    InputTextModule,
    ToastModule,
    ButtonModule,
    PasswordModule,

    // translate modules
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
