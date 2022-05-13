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
      name: '',
      top: '20px'
    },
  }
  currentActiveRoute: any;
  toggleNav: boolean = false;
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

    this.activeRoute['/about-us'].image = window.screen.width < 500 ? 'portfolio/res3/res3.1.jpg' : '10.jpg';
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

  openMenu() {
    this.toggleNav = !this.toggleNav;
  }

  closeMenu() {
    this.toggleNav = false;
  }

}
