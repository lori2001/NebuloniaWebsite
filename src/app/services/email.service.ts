import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailElement } from '../models/database/email.element';
import { MessageService } from 'primeng/api';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  baseUrl = 'api';

  constructor(private http: HttpClient) {}

  sendEmail(
    emailElement: EmailElement,
    messageService: MessageService,
    translate: TranslateService
  ) {
    this.http.post(`${this.baseUrl}/sendEmail.php`, emailElement).subscribe(
      (response) => {
        if (response === null) {
          messageService.add({
            key: 'custom',
            severity: 'success',
            summary: translate.instant('contact.messages.success.summary'),
            detail: translate.instant('contact.messages.success.details'),
          });
        }
      },
      (error) => {
        if (error !== null) {
          messageService.add({
            key: 'custom',
            severity: 'warn',
            summary: translate.instant('contact.messages.error.summary'),
            detail: translate.instant('contact.messages.error.details'),
          });
        }
      }
    );
  }
}
