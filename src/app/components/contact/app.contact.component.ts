import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { MessageService } from 'primeng/api';
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
  messageMargin = '48px'; // holds the position of the notification relative to the top
  fbMessenger = false; // helps fix safari-facebook BUG
  emailElement = new EmailElement('', '', '', '');

  constructor(private messageService: MessageService,
              private deviceService: DeviceDetectorService,
              private emailService: EmailService) {
    this.checkMobileMode();
    if (this.deviceService.browser === 'FB-Messanger') {
      this.fbMessenger = true;
    }
  }

  @ViewChild('mailform1', {static: false}) mailForm1: ElementRef;
  @ViewChild('mailform2', {static: false}) mailForm2: ElementRef;
  @ViewChild('mailform3', {static: false}) mailForm3: ElementRef;
  @ViewChild('mailform4', {static: false}) mailForm4: ElementRef;

  @HostListener('window:resize', [])
  checkMobileMode() {
    if (window.innerWidth < 768 && window.innerWidth > 370) {
      this.messageMargin = '-7px';
    } else {
      this.messageMargin = '48px';
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
