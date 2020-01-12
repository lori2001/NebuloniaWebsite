import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailElement } from '../models/database/email.element';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
    baseUrl = 'api';

    constructor(private http: HttpClient) {}

    sendEmail(emailElement: EmailElement, messageService: MessageService) {

        this.http.post(`${this.baseUrl}/sendEmail.php`, emailElement)
        .subscribe(
          response => {
            if (response === null) {
              messageService.add({
                key: 'custom',
                severity: 'success',
                summary: 'contact.messages.success.summary',
                detail: 'contact.messages.success.details'
              });
            }
          },
          (error) => {
            if (error !== null) {
              messageService.add({
                key: 'custom',
                severity: 'warn',
                summary: 'contact.messages.error.summary',
                detail: 'contact.messages.error.details'
              });
            }
          }
        );
    }
}
