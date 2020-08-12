import { Component, ViewChild, ViewChildren } from "@angular/core";
import { NgImageSliderComponent } from 'ng-image-slider';
import { PORTFOLIO, TAG } from './project.constant';
import { ActivatedRoute } from '@angular/router';
import { trigger, transition, query, style, stagger, animate } from '@angular/animations';

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['./projects.component.scss'],
    animations: [
        trigger('pageAnimations', [
            transition(':enter', [
                query('.hero, form', [
                    style({ opacity: 0, transform: 'translateY(-100px)' }),
                    stagger(-30, [
                        animate('800ms cubic-bezier(0.35, 0, 0.25, 1)', style({ opacity: 1, transform: 'none' }))
                    ])
                ])
            ])
        ]),
        trigger('filterAnimation', [
            transition(':enter, * => 0, * => -1', []),
            transition(':increment', [
                query(':enter', [
                    style({ opacity: 0, width: '0px' }),
                    stagger(50, [
                        animate('500ms ease-out', style({ opacity: 1, width: '*' })),
                    ]),
                ], { optional: true })
            ]),
            transition(':decrement', [
                query(':leave', [
                    stagger(50, [
                        animate('500ms ease-out', style({ opacity: 0, width: '0px' })),
                    ]),
                ])
            ]),
        ]),
    ]
})

export class ProjectsComponent {
    allImages: Array<object> = [];
    imageObject: Array<object> = [
        {
            image: 'assets/portfolio/2.JPG',
            thumbImage: 'assets/portfolio/2.JPG',
        },
        {
            image: 'assets/portfolio/21.JPG',
            thumbImage: 'assets/portfolio/21.JPG',
        },
        {
            image: 'assets/portfolio/3Living room.JPG',
            thumbImage: 'assets/portfolio/3Living room.JPG',
        },
        {
            image: 'assets/portfolio/3living room_1.JPG',
            thumbImage: 'assets/portfolio/3living room_1.JPG',
        },
        {
            image: 'assets/portfolio/4living room.JPG',
            thumbImage: 'assets/portfolio/4living room.JPG',
        },
        {
            image: 'assets/portfolio/5living room.JPG',
            thumbImage: 'assets/portfolio/5living room.JPG',
        },
        {
            image: 'assets/portfolio/6dinning area.JPG',
            thumbImage: 'assets/portfolio/6dinning area.JPG',
        },
        {
            image: 'assets/portfolio/6dinning area_1.JPG',
            thumbImage: 'assets/portfolio/6dinning area_1.JPG',
        }
    ]


    whatWeDo = [
        {
            heading: 'ALL',
            filter: 'all'
        },
        {
            heading: 'Residential',
            content1: "Interior design is an important part of design, focusing on creating interior spaces that make the building functional and aesthetically pleasing. However, we have different types of structures, so it makes sense that we have different types of interior design. One of the major platforms for designers is the design of the living space, or the interior of the spaces where people live. This may include houses, flats, apartments, and many more spaces. A builder may build a house, but it is the designer's job to make it a home.  Therefore, a residential designer's primary focus is creating a livable space.",
            image: 'residential.jpg',
            flexDirection: 'unset',
            filter: 'residential'
        },
        {
            heading: 'Commercial',
            content1: "It has often been said that the key to a successful business is location, location, location. We get it; location is important. But even with the greatest location in the world, a business can easily fail if its interior is not just as well thought out. Interior design is the art of balancing functional needs and aesthetic preferences inside of a structure. After all, the purpose of a building is really defined by its interior, not its exterior.",
            content2: "A commercial building is one used for some sort of business purpose, such as a store, office, warehouse, or a restaurant. Just as there are many types of buildings, there are different types of interior design. Houses utilize one kind of design, while commercial structures have very different needs. We want these needs to be successful, but a successful structure does require a bit more than just location.",
            image: 'commercial.jpg',
            flexDirection: 'row-reverse',
            filter: 'commercial'
        },
        {
            heading: 'Office',
            content1: "Office design is vital to both employees and customers.  For employees who spend a large part of their day in an office, it is crucial to create a space that’s functional, visually appealing, comfortable, and inviting—all of which promote productivity and efficiency.  For customers, office design sets the tone for a business and tells a story about the brand, professionalism, and success. Similar to evidence-based design in healthcare settings, interior design—no matter what the location—affects people’s moods, attitudes, inspiration, drive, and everything in between.  That is why building a space conducive for owners, employees, and customers is no longer being considered just a luxury, it’s becoming a necessity.",
            image: 'office.jpg',
            flexDirection: 'unset',
            filter: 'office'
        },
    ]
    selectedFilter = this.whatWeDo[0];
    // filterPortFilo = [...this.portfolio];
    portfolio = PORTFOLIO;
    filterPortFolio = [...this.portfolio];
    filterPortFolioCount = -1;

    @ViewChild('portfolio')
    slider: NgImageSliderComponent;
    sliderImages: Array<object> = [];

    tag = TAG;
    imageSlideCount = 3;

    constructor(private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        this.portfolio.map(type => {
            type['slider'] = [];
            let index = type.src.split('/')[0];
            index = index.replace(/\D/g, '');
            for (let i = 1; i <= type.count; i++) {
                type['slider'].push({
                    image: `assets/portfolio/${this.tag[type.filter]}${index}/${this.tag[type.filter]}${index}.${i}.jpg`,
                    thumbImage: `assets/portfolio/${this.tag[type.filter]}${index}/${this.tag[type.filter]}${index}.${i}.jpg`,
                });
                this.allImages.push({
                    image: `assets/portfolio/${this.tag[type.filter]}${index}/${this.tag[type.filter]}${index}.${i}.jpg`,
                    thumbImage: `assets/portfolio/${this.tag[type.filter]}${index}/${this.tag[type.filter]}${index}.${i}.jpg`,
                });
            }
        });
        console.log(this.portfolio);
        this.sliderImages = this.portfolio[0]['slider'];
        for (let i = 0; i < 25; i++) {
            this.imageObject[i] = this.allImages[Math.floor(Math.random() * this.allImages.length)];
        }

        this.activatedRoute.queryParams.subscribe(params => {
            const type = this.whatWeDo.find(item => item.filter == params.filter);
            if (type) {
                this.filterProjects(type);
            }
        });

        this.setImageSlideCount();
    }

    enlarge(slider) {
        console.log(slider);
        this.sliderImages = slider;
        this.slider['elRef'].nativeElement.style.display = 'block'
        this.slider.ligthboxShow = true;
    }

    filterProjects(type) {
        this.selectedFilter = type;
        if (type.filter !== 'all') {
            this.filterPortFolio = this.portfolio.filter(item => item.filter == this.selectedFilter.filter);
        } else {
            this.filterPortFolio = [...this.portfolio];
        }
        const newTotal = this.filterPortFolio.length;

        if (this.filterPortFolioCount !== newTotal) {
          this.filterPortFolioCount = newTotal;
        }
    }

    imageSliderClose() {
        this.slider['elRef'].nativeElement.style.display = 'none'
        this.slider.ligthboxShow = false;
    }

    setImageSlideCount() {
        const screenSize = window.screen.width;
        if(screenSize < 480) {
            this.imageSlideCount = 1;
        } else if (screenSize > 480 && screenSize<768) {
            this.imageSlideCount = 2;
        } else {
            this.imageSlideCount = 3;
        }
    }
}