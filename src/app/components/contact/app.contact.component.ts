import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { MessageService } from 'primeng/components/common/messageservice';
import { DeviceDetectorService } from 'ngx-device-detector';
import { EmailElement } from 'src/app/models/database/email.element';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './app.contact.component.html',
  styleUrls: ['./app.contact.component.css'],
  providers: [MessageService]
})
export class ContactComponent {
  message_margin = '48px'; // holds the position of the notification relative to the top
  fb_messanger = false; // helps fix safari-facebook BUG
  emailElement = new EmailElement('', '', '', '');

  constructor(private messageService: MessageService,
              private deviceService: DeviceDetectorService,
              private emailService: EmailService) {
    this.checkMobileMode();
    if (this.deviceService.browser === 'FB-Messanger') {
      this.fb_messanger = true;
    }
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
    if (this.mailForm1.nativeElement.value !== '' &&
        this.mailForm2.nativeElement.value !== '' &&
        this.mailForm3.nativeElement.value !== '' &&
        this.mailForm4.nativeElement.value !== '') {
          // if there is no empty form clear message boxes
          this.mailForm1.nativeElement.value = '';
          this.mailForm2.nativeElement.value = '';
          this.mailForm3.nativeElement.value = '';
          this.mailForm4.nativeElement.value = '';
    }
  }

  sendEmail() {
    this.emailElement.name = this.mailForm1.nativeElement.value;
    this.emailElement.email = this.mailForm2.nativeElement.value;
    this.emailElement.title = this.mailForm3.nativeElement.value;
    this.emailElement.message = this.mailForm4.nativeElement.value;

    /*sends email and returns status message through messageService*/
    this.emailService.sendEmail(this.emailElement, this.messageService);

    // this.showSuccess();
    this.clearmailInput();
  }

  /* makes toasts' close-button work */
  onReject() {
    this.messageService.clear('custom');
  }
}
