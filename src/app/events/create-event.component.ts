import { Component } from '@angular/core'
import { Router } from '@angular/router'

@Component({
    template:`
    <h1>New Event</h1>
    <hr>
    <div class="col-md-6">
        <h3> [Create Event Form will go here ] </h3>
        <br/>
        <br/>
        <button type = "submit" class = "btn btn-primary" > Save </button>
        <button (click)="cancel()" type = "button" class = "btn btn-default" > Cancel </button>
    </div>
    `
})
export class CreateEventComponent{
    dirty = true;
    constructor(private router: Router){}
    
    cancel(){
        //going to a route(chaning url through a click event and angular router module)
        this.router.navigate(['/events']);
    }
}