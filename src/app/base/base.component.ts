import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-base',
    templateUrl: 'base.component.html',
    styleUrls: ['./base.component.scss']
})

export class BaseComponent implements OnInit {
    title = 'petalsArtDecor';
    bgPos = 0;
    bgPosition = '100px';

    whatWeDo = [
        {
            heading: 'Residential Design',
            conent: '',
            image: 'residential.jpg',
            flexDirection: 'unset'
        },
        {
            heading: 'Office Design',
            conent: '',
            image: 'office.jpg',
            flexDirection: 'row-reverse'
        },
        {
            heading: 'Commercial Design',
            conent: '',
            image: 'commercial.jpg',
            flexDirection: 'unset'
        },
        // {
        //   heading: 'Hospitality Design',
        //   conent: '',
        //   image: 'hospitality.jpg',
        //   flexDirection: 'row-reverse'
        // }
    ]

    ourProcess = [
        {
            value: 'MEET & AGREE',
            selected: true,
        },
        {
            value: 'IDEA & CONCEPT',
            selected: false,
        },
        {
            value: 'DESIGN & CREATE',
            selected: false,
        },
        {
            value: 'BUILD & INSTALL',
            selected: false,
        }
    ]


    navbarMenu = [
        {
            key: 'home',
            value: 'Home',
            redirectTo: '/home'
        },
        {
            key: 'projects',
            value: 'Projects',
            redirectTo: '/home'
        },
        {
            key: 'srvices',
            value: 'Services',
            redirectTo: '/home'
        },
        {
            key: 'contactUs',
            value: 'Contact Us',
            redirectTo: '/home'
        },
        {
            key: 'aboutUs',
            value: 'About Us',
            redirectTo: '/home'
        },
    ]


    constructor() {
        // setInterval(() => {
        //     this.bgPos = this.bgPos - 0.15;
        //     this.bgPosition = `${this.bgPos}px`;
        // }, 0);
    }

    ngOnInit() {

    }

}
