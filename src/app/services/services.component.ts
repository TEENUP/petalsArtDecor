import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'services',
    templateUrl: 'services.component.html',
    styleUrls: ['./services.component.scss']
})

export class ServicesComponent implements OnInit {
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
    constructor() {

    }

    ngOnInit() {
        
    }
}