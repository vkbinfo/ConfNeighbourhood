import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from "./events/event-thumbnail.component";

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
