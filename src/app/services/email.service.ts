import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { EmailElement } from '../models/database/email.element';
import { MessageService } from 'primeng/components/common/messageservice';

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
                summary: 'contact.message.success.summary',
                detail: 'contact.message.success.detail'
              });
              return console.log('resp:Message Sent!');
            }
          },
          (error) => {
            if (error !== null) {
              messageService.add({
                key: 'custom',
                severity: 'warn',
                summary: 'contact.message.error.summary',
                detail: 'contact.message.error.detail'
              });
              return console.log('err:Error sending message!');
            }
          }
        );
    }
}
