import { Component } from '@angular/core';
import { EventService } from '../../services/event.service'

// to get params from url
import { ActivatedRoute } from '@angular/router'

@Component({
    templateUrl:'./event-detail.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px; }
        .event-image { height:100px; }
    `]
})
export class EventDetailComponent{
    event:any;
    
    constructor(private eventService: EventService, private route: ActivatedRoute){}

    ngOnInit(){

        let eventId = parseInt(this.route.snapshot.params['id']);
        this.event = this.eventService.getEventById( eventId );
    }
}