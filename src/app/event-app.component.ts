import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template:`
            <events-list></events-list>
            `
})
export class EventAppComponent {
  title = 'Event App';
}
