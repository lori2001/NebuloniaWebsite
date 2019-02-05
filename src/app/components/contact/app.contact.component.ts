import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-contact',
  templateUrl: './app.contact.component.html',
  styleUrls: ['./app.contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent {

  constructor(private translate: TranslateService,
              private messageService: MessageService) {}


  @ViewChild('mailform1') mailForm1: ElementRef;
  @ViewChild('mailform2') mailForm2: ElementRef;
  @ViewChild('mailform3') mailForm3: ElementRef;
  @ViewChild('mailform4') mailForm4: ElementRef;

  clearmailInput() {
      this.mailForm1.nativeElement.value = '';
      this.mailForm2.nativeElement.value = '';
      this.mailForm3.nativeElement.value = '';
      this.mailForm4.nativeElement.value = '';
  }
  showSuccess() {
    //  this.messageService.add({key: 'custom', severity: 'success', summary: 'Message Sent', detail: 'Your message has been sent'});
      this.messageService.add({key: 'custom', severity: 'warn', summary: 'Message Not Sent', detail: 'Mail service not available yet'});
  }
}
