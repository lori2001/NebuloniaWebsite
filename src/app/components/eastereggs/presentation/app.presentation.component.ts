import { Component, Input, HostListener } from '@angular/core';
/*This is basically a custom lightbox for the presentation video
I managed to come up with.*/

@Component({
    selector: 'app-presentation',
    template: `
    <section id="presentation" *ngIf="this.trigger === true">
            <a (click)="close();" class="fa fa-times"></a>
            <video controls autoplay>
                <source src="../../../assets/videos/presidents/egg_video.mp4" type="video/mp4">
            </video>
    </section>`,
    styles: [`#presentation {background-color:rgba(0, 0, 0, 0.5);
                             position: fixed;
                             top:0; left:0;
                             overflow:hidden;
                             width:100vw;
                             height:100vh;
                             z-index: 1000;}
              .fa{
                position:fixed;
                top:12px; right:20px;
                z-index: 1002;
                color: white !important;

                font-size: 25px;
                text-decoration: none;
                -webkit-transition: color .3s ease-in-out;
                -moz-transition: color .3s ease-in-out;
                -o-transition: color .3s ease-in-out;
                transition: color .3s ease-in-out;
               }
              .fa:hover{
                color: #F06000 !important;
                cursor: pointer;
               }
              video{
                    position:fixed;
                    top:50%; left:50%;
                    z-index: 1001;
                    transform: translate(-50%,-50%);
                    height: auto;
              }
              h1 {color: white;}
              @media screen and (min-width: 993px) {video{width: 65%;}}
              @media screen and (min-width: 768px) and (max-width: 992px){video{width: 80%;}}
              @media screen and (min-width: 576px) and (max-width: 767px){video{width: 87%;}}
              @media screen and (min-width: 0px) and (max-width: 575px){video{width: 93%;}}
              `]
  })
  export class PresentationComponent {
    @Input() trigger = false;

    close() {
        this.trigger = false;
    }

  }
