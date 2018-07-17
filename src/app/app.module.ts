import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { EventAppComponent } from './event-app.component';
import { EventListComponent } from './events/events-list.component'
import { EventThumbnailComponent } from "./events/event-thumbnail.component";
import { NavAppComponent} from "./navbar/nav-app.component"
import { EventService } from "./services/event.service"
import { ToasterService } from "./common_services/toastr-service"
@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    NavAppComponent
  ],
  providers:[
    EventService,
    ToasterService
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }
