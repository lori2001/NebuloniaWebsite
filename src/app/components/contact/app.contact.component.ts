import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { MessageService } from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-contact',
  templateUrl: './app.contact.component.html',
  styleUrls: ['./app.contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent {
  window_width: number;

  constructor(private translate: TranslateService,
              private messageService: MessageService) {
    this.checkMobileMode();
  }

  @ViewChild('mailform1') mailForm1: ElementRef;
  @ViewChild('mailform2') mailForm2: ElementRef;
  @ViewChild('mailform3') mailForm3: ElementRef;
  @ViewChild('mailform4') mailForm4: ElementRef;

  @HostListener('window:resize', ['$event'])
  checkMobileMode() {
    this.window_width = window.innerWidth;
  }

  clearmailInput() {
      this.mailForm1.nativeElement.value = '';
      this.mailForm2.nativeElement.value = '';
      this.mailForm3.nativeElement.value = '';
      this.mailForm4.nativeElement.value = '';
  }
  showSuccess() {
    //  this.messageService.add({key: 'custom', severity: 'success', summary: 'Message Sent', detail: 'Your message has been sent'});
    if (this.window_width < 768 && this.window_width > 370) {
      this.messageService.add({key: 'marginless', severity: 'warn', summary: 'Message Not Sent', detail: 'Mail service not available yet'});
    } else {
      this.messageService.add({key: 'margined', severity: 'warn', summary: 'Message Not Sent', detail: 'Mail service not available yet'});
    }
  }
}
