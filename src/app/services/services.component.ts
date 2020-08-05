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
            content1: "Interior design is an important part of design, focusing on creating interior spaces that make the building functional and aesthetically pleasing. However, we have different types of structures, so it makes sense that we have different types of interior design. One of the major platforms for designers is the design of the living space, or the interior of the spaces where people live. This may include houses, flats, apartments, and many more spaces. A builder may build a house, but it is the designer's job to make it a home.  Therefore, a residential designer's primary focus is creating a livable space.",
            image: 'residential.jpeg',
            flexDirection: 'unset',
            bgColor: '#18191b',
            filter: 'residential'
        },
        {
            heading: 'Commercial Design',
            marginBottom: '10px',
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
            filter: 'office'
        },
        // {
        //   heading: 'Hospitality Design',
        //   content: '',
        //   image: 'hospitality.jpg',
        //   flexDirection: 'row-reverse'
        // }
    ]
    constructor() {

    }

    ngOnInit() {

    }
}