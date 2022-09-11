import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { LanguageComponent } from 'src/app/app.language.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './app.not-found.component.html',
  styleUrls: ['./app.not-found.component.css'],
})
export class NotFoundComponent extends LanguageComponent {
  constructor(
    activatedRoute: ActivatedRoute,
    translate: TranslateService,
    router: Router
  ) {
    super(activatedRoute, translate, router);
  }
}
