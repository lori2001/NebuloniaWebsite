import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-contact',
  templateUrl: './app.contact.component.html',
  styleUrls: ['./app.contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent {
  message_margin = '48px';

  constructor(private messageService: MessageService) {
    this.checkMobileMode();
  }

  @ViewChild('mailform1') mailForm1: ElementRef;
  @ViewChild('mailform2') mailForm2: ElementRef;
  @ViewChild('mailform3') mailForm3: ElementRef;
  @ViewChild('mailform4') mailForm4: ElementRef;

  @HostListener('window:resize', ['$event'])
  checkMobileMode() {
    if (window.innerWidth < 768 && window.innerWidth > 370) {
      this.message_margin = '-7px';
    } else {
      this.message_margin = '48px';
    }
  }

  clearmailInput() {
      this.mailForm1.nativeElement.value = '';
      this.mailForm2.nativeElement.value = '';
      this.mailForm3.nativeElement.value = '';
      this.mailForm4.nativeElement.value = '';
  }
  showSuccess() {
      this.messageService.add({
        key: 'custom',
        severity: 'warn',
        summary: 'contact.message.error.summary',
        detail: 'contact.message.error.detail'
      });
      /*this.messageService.add({
        key: 'custom',
        severity: 'success',
        summary: 'contact.message.success.summary',
        detail: 'contact.message.success.detail'
      });*/
  }
}
