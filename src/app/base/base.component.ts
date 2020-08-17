import { Component, OnInit } from '@angular/core';
import { TAG, PORTFOLIO } from '../projects/project.constant';

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
            content1: "Interior design is an important part of design, focusing on creating interior spaces that make the building functional and aesthetically pleasing. However, we have different types of structures, so it makes sense that we have different types of interior design. One of the major platforms for designers is the design of the living space, or the interior of the spaces where people live. This may include houses, flats, apartments, and many more spaces. A builder may build a house, but it is the designer's job to make it a home.  Therefore, a residential designer's primary focus is creating a livable space.",
            image: 'residential.jpeg',
            bgColor: '#18191b',
            flexDirection: 'unset',
            filter: 'residential',
        },
        {
            heading: 'Commercial Design',
            content1: "It has often been said that the key to a successful business is location, location, location. We get it; location is important. But even with the greatest location in the world, a business can easily fail if its interior is not just as well thought out. Interior design is the art of balancing functional needs and aesthetic preferences inside of a structure. After all, the purpose of a building is really defined by its interior, not its exterior.",
            content2: "A commercial building is one used for some sort of business purpose, such as a store, office, warehouse, or a restaurant. Just as there are many types of buildings, there are different types of interior design. Houses utilize one kind of design, while commercial structures have very different needs. We want these needs to be successful, but a successful structure does require a bit more than just location.",
            image: 'comm2/comm2.1.jpg',
            flexDirection: 'row-reverse',
            bgColor: 'rgb(33, 34, 37)',
            filter: 'commercial',
        },
        {
            heading: 'Office Design',
            content1: "Office design is vital to both employees and customers.  For employees who spend a large part of their day in an office, it is crucial to create a space that’s functional, visually appealing, comfortable, and inviting—all of which promote productivity and efficiency.  For customers, office design sets the tone for a business and tells a story about the brand, professionalism, and success. Similar to evidence-based design in healthcare settings, interior design—no matter what the location—affects people’s moods, attitudes, inspiration, drive, and everything in between.  That is why building a space conducive for owners, employees, and customers is no longer being considered just a luxury, it’s becoming a necessity.",
            image: 'off1/off1.2.jpg',
            flexDirection: 'unset',
            bgColor: '#18191b',
            filter: 'office',
        },
    ]
    
    ourProcess = [
        {
            value: 'INITIAL MEET',
            content: "Starting with meet and greet session, Petals Art Décor will determine the goal for the project through discussing the client's vision and the services which we render.",
            selected: true,
            key: 'meetAgree',
        },
        {
            value: 'DESIGN & CONCEPT',
            content: 'After initial discussion, schematic design - a general outlay will be discussed. Through brainstorming, selection of material and designs will be provided to the client. Atlast for illustration of the final concept of space, a 3d design can be rendered.',
            selected: false,
            key: 'ideaConcept',
        },
        {
            value: 'EXECUTION',
            content: 'Starting with scheduling construction timeline and approval of annexure, we will oversee the whole installation of design and your furnishing concepts.',
            selected: false,
            key: 'designCreate',
        },
        {
            value: 'SITE HANDOVER',
            content: 'Final walk through with the client and any left issues will be resolved. After satisfaction of client, the space is ready for handover.',
            selected: false,
            key: 'buildInstall',
        }
    ]
    selectedProcess = this.ourProcess[0];
    
    experienceWithUs = [
        {
            heading: 'INTERIOR EXPERTISE',
            faIcon: 'fa-home',
            description: 'From workspaces and learning spaces to living spaces and retail and leisure spaces, our multidisciplinary approach and long-standing expertise in large scale complex projects is distinctive to our way of delivering interior design projects.'
        },
        {
            heading: 'FREE CONSULTATION',
            centre: true,
            faIcon: 'fa-comments-o',
            description: 'There is absolutely no charge for the initial meeting with the designer and there is no pressure to hire our firm.  We will sit down with you, hear about your thoughts & ideas, and give you some initial feedback about it, at no charge. This meeting gives you a chance to "interview" us and gives us the chance to know you.'
        },
        {
            heading: 'AFFORDABLE PRICE',
            faIcon: 'fa-inr',
            description: 'Go to the next level of convenience by keeping the process hassle-free. Get quality material and interior for your area including large & small designs while saving time, effort and money. We can provide quality work and material for you at best & affordable prices.'
        },
        {
            heading: 'GUARANTEED WORKS',
            faIcon: 'fa-recycle',
            description: 'All Work Guaranteed is committed to excellence in every aspect of our business. We uphold a standard of integrity bound by fairness, honesty and responsibility in all of our jobs. Client needs, functionality, elegance, cost control and lateral thinking are main guidelines through which we aim to develop unique interior space capable of establishing and strengthen the relationship to a place.'
        },
        {
            heading: '24 / 7 SUPPORT',
            faIcon: 'fa-envelope-open-o',
            description: 'In the field of Interior Design Services, customer support is one of the most prioritized plan features. We provide 24/7 support to our customers. We give special attention to each project and made all the best possible results to meet our client’s requirements.'
        }
    ]

    tag = TAG;
    portfolio = PORTFOLIO;
    allImages = [];
    portfolioImages = [];


    constructor() {
        setInterval(() => {
             this.bgPos = this.bgPos - 0.3;
             this.bgPosition = `${this.bgPos}px`;
         }, 0);
    }

    ngOnInit() {
        this.portfolio.map(type => {
            let index = type.src.split('/')[0];
            index = index.replace(/\D/g,'');
            for (let i = 1; i <= type.count; i++) {
                this.allImages.push({
                    src: `assets/portfolio/${this.tag[type.filter]}${index}/${this.tag[type.filter]}${index}.${i}.jpg`,
                });
            }
        });
        for(let i=0;i<8;i++) {
            this.portfolioImages[i] = this.allImages[Math.floor(Math.random() * this.allImages.length)];
        }
        console.log(this.portfolioImages);
    }

    selectProcess(process) {
        this.selectedProcess = process;
    }

}
