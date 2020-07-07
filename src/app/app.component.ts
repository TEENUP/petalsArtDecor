import { Component, ViewChild, ElementRef } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  navbarMenu = [
    {
      key: 'home',
      value: 'Home',
      redirectTo: '/home'
    },
    {
      key: 'aboutUs',
      value: 'About Us',
      redirectTo: '/about-us'
    },
    {
      key: 'projects',
      value: 'Projects',
      redirectTo: '/projects'
    },
    {
      key: 'services',
      value: 'Services',
      redirectTo: '/services'
    },
    {
      key: 'contactUs',
      value: 'Contact Us',
      redirectTo: '/contact-us'
    },
  ]

  activeRoute = {
    '/about-us': {
      image: '10.jpg',
      name: 'About Us'
    },
    '/projects': {
      image: '6.jpg',
      name: 'Projects'
    },
    '/services': {
      image: '7.jpg',
      name: 'Services'
    },
    // '/contact-us': {
    //   image: '7.jpg',
    //   video: 'bg-videos.MP4',
    //   key: 'contactUS',
    //   name: 'Contact Us'
    // }
  }
  currentActiveRoute:any;
  @ViewChild('goToTop', {static: false}) goToTop: ElementRef;
  
  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if(event instanceof NavigationEnd) {
        this.currentActiveRoute = event.url;
      }
    });
  }
  
  scrollTop(event) {
    window.scrollTo(0, 0);
  }


}
