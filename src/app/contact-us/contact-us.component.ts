import { Component } from "@angular/core";
import {Email} from "../../assets/js/smtp.js";
// declare let Email: any;


@Component({
    selector: 'contact-us',
    templateUrl: 'contact-us.component.html',
    styleUrls: ['./contact-us.component.scss']
})

export class ContactUsComponent {

    contactData: any = {
        name:'Puneet',
        email: 'teenup05@gmail.com',
        number: '8920226154',
        msg: 'Hi this is a test email for testing whether email are sent or not... haha',
    };

    constructor() {

    }

    sendEmail(contactData) {
        console.log(contactData);
        Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'puneetgupta5294@gmail.com',
            Password: '7B5F3B5E781B48238C5E0F843F6DE23D3BA9',
            To: 'sagar.singhal94@gmail.com',
            From: 'puneetgupta5294@gmail.com',
            Subject: `Query for petals art decor from ${this.contactData.name}`,
            Body: `
            <i>This is sent as a Query for Petals art decor.</i> <br/> <b>Name: </b>${this.contactData.name} <br /> <b>Email: </b>${this.contactData.email}<br /> <b>Message: </b>${this.contactData.msg}<br /> <b>Mobile:</b> <br /> ${this.contactData.number} <br><br> <b>~End of Message.~</b> `
        }).then(message => { alert(message) });

    }

}