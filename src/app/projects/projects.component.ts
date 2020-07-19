import { Component } from "@angular/core";

@Component({
    selector: 'projects',
    templateUrl: 'projects.component.html',
    styleUrls: ['./projects.component.scss']
})

export class ProjectsComponent {

    portfolio = [
        { src: '2.JPG' },
        { src: '21.JPG' },
        { src: '3Living room.JPG' },
        { src: '3living room_1.JPG' },
        { src: '4living room.JPG' },
        { src: '5living room.JPG' },
        { src: '6dinning area.JPG' },
        { src: '6dinning area_1.JPG' }
    ]

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
            heading: 'Residential Design',
            content1: "Interior design is an important part of design, focusing on creating interior spaces that make the building functional and aesthetically pleasing. However, we have different types of structures, so it makes sense that we have different types of interior design. One of the major platforms for designers is the design of the living space, or the interior of the spaces where people live. This may include houses, flats, apartments, and many more spaces. A builder may build a house, but it is the designer's job to make it a home.  Therefore, a residential designer's primary focus is creating a livable space.",
            image: 'residential.jpg',
            flexDirection: 'unset'
        },
        {
            heading: 'Commercial Design',
            content1: "It has often been said that the key to a successful business is location, location, location. We get it; location is important. But even with the greatest location in the world, a business can easily fail if its interior is not just as well thought out. Interior design is the art of balancing functional needs and aesthetic preferences inside of a structure. After all, the purpose of a building is really defined by its interior, not its exterior.",
            content2: "A commercial building is one used for some sort of business purpose, such as a store, office, warehouse, or a restaurant. Just as there are many types of buildings, there are different types of interior design. Houses utilize one kind of design, while commercial structures have very different needs. We want these needs to be successful, but a successful structure does require a bit more than just location.",
            image: 'commercial.jpg',
            flexDirection: 'row-reverse'
        },
        {
            heading: 'Office Design',
            content1: "Office design is vital to both employees and customers.  For employees who spend a large part of their day in an office, it is crucial to create a space that’s functional, visually appealing, comfortable, and inviting—all of which promote productivity and efficiency.  For customers, office design sets the tone for a business and tells a story about the brand, professionalism, and success. Similar to evidence-based design in healthcare settings, interior design—no matter what the location—affects people’s moods, attitudes, inspiration, drive, and everything in between.  That is why building a space conducive for owners, employees, and customers is no longer being considered just a luxury, it’s becoming a necessity.",
            image: 'office.jpg',
            flexDirection: 'unset'
        },
    ]

    constructor() {

    }
}