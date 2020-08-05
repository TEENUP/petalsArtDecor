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
        name:'',
        email: '',
        number: '',
        msg: '',
    };

    constructor() {

    }

    sendEmail(contactData) {
        console.log(contactData);
        Email.send({
            Host: 'smtp.elasticemail.com',
            Username: 'petalsartdecor@gmail.com',
            Password: 'B12141E04F94C37627900B16E7C00D6A4249',
            To: 'info@petalsartdecor.com',
            From: 'info@petalsartdecor.com',
            Subject: `Query for Petals Art Decor from ${this.contactData.name}`,
            Body: `
            <i>This is sent as a Query for Petals art decor.</i> <br/> <b>Name: </b>${this.contactData.name} <br /> <b>Email: </b>${this.contactData.email}<br /> <b>Message: </b>${this.contactData.msg}<br /> <b>Mobile:</b> <br /> ${this.contactData.number} <br><br> <b>~End of Message.~</b> `
        }).then(message => { alert('Your Message has been sent successfully'); this.contactData = {} });

    }

}