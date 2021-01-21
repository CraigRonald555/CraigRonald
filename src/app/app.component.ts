import { Component, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { OwlCarousel } from 'ngx-owl-carousel';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PersonalWebsite';

  @ViewChild('owlElement') owlElement: OwlCarousel;
  myCarouselItems = [];
  mySlideItems = [];
  mySlideOptions = {margin: 5, dots: false, nav: false, responsive: {
    0: {
      items: 1,
      autoplay: false,
    },
      361: {
      items: 2,
      autoplay: false,
    },
    600: {
      items: 2,
      autoplay: false,
    },
    680: {
      items: 3,
      autoplay: false,
    },

  }};

  images = ["assets/img/carousel_0.jpg","assets/img/carousel_1.jpg","assets/img/carousel_2.jpg"];

  constructor(private config: NgbCarouselConfig) {

    config.interval = 5000;

  }
}
