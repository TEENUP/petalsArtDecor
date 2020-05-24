import { Component } from '@angular/core';

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
    {
        key: 'aboutUs',
        value: 'About Us',
        redirectTo: '/about-us'
    },
]



  constructor() {
  }
}
