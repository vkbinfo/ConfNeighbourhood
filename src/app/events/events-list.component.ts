import { Component, OnInit } from "../../../node_modules/@angular/core";
import { EventService } from "../services/event.service";
import { ToasterService } from "../common_services/toastr-service"

declare let toastr;
@Component({
    selector: 'events-list',
    template: `
            <div>  
                <h1> Upcoming angular Events </h1>
                <div class = "row">
                    <div class = "col-md-5"  *ngFor = "let event1 of events" >
                        <event-thumbnail [event]="event1" (click) = "clickThumbnailEvent(event1.name)">
                        </event-thumbnail>
                    </div>
                <div>
            </div>
    `
})
export class EventListComponent implements OnInit{
    events:any[];
    constructor(private eventService: EventService,
         private toastService: ToasterService){}
  
    ngOnInit(){
        this.events = this.eventService.getEvents();
    }
   
    clickThumbnailEvent(title){
        // notification for some success messages.
        this.toastService.success(title)
    }
}
