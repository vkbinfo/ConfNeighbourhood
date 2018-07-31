import { Component } from '@angular/core';

@Component({
  selector: 'event-app',
  template:`
            <nav-app></nav-app>    
            <router-outlet></router-outlet>
  `
})
export class EventAppComponent {
  title = 'Event App';
}
