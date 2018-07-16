import { Component } from "../../../node_modules/@angular/core";

@Component({
    selector: 'events-list',
    template: `
            <div>  
                <h1> Upcoming angular Events </h1>
                <event-thumbnail [event]="event1" ></event-thumbnail>
            </div>
    `
})
export class EventListComponent {
    event1 = {
        name:'ngConf 2025',
        date: '3/1/2025', 
        time: '8 AM', 
        price: 599,
        location: {
            address: '123 Main St', 
            city: 'Salt Lake City, UT', 
            country: 'USA'
        }
    }
}