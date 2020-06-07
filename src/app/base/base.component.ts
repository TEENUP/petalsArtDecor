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

    experienceWithUs = [
        {
            heading: 'INTERIOR EXPERTISE'
        },
        {
            heading: 'FREE CONSULTATION',
            centre: true
        },
        {
            heading: 'AFFORDABLE PRICE'
        },
        {
            heading: 'GUARANTEED WORKS'
        },
        {
            heading: '24 / 7 SUPPORT'
        }
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
