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
      name: ''
    },
  }
  currentActiveRoute: any;
  @ViewChild('goToTop', { static: false }) goToTop: ElementRef;
  scrollAmount = 5;

  constructor(private router: Router) {
    console.log(window.navigator);
  }

  ngOnInit() {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentActiveRoute = event.url;
        window.scrollTo(0, 0);
      }
    });
  }

  scrollTop(event) {
    window.scrollTo(0, 0);
  }

  toggle() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  marqueeScrollAmount(actionType?) {
    if(actionType=='hover') {
      this.scrollAmount = 0;
    } else {
      this.scrollAmount = 5;
    }
  }


}
