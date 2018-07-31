import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { 
        EventAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        NavAppComponent,
        EventDetailComponent,
        CreateEventComponent,
        Error404Component,
        EventRouteActivatorService,

        //services
        EventService,
        ToasterService,

        //routes
        appRoutes
} from './index'


@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
    NavAppComponent,
    EventAppComponent,
    EventListComponent,
    EventThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    Error404Component
  ],
  providers:[
    EventService,
    ToasterService,
    EventRouteActivatorService,
    {provide:"checkMyDirtyState",useValue:checkingInCreateEventComponent}
  ],
  bootstrap: [EventAppComponent]
})
export class AppModule { }

function checkingInCreateEventComponent(component:CreateEventComponent){
  if(component.dirty){
    return window.confirm("Do you really want to leave this page?");
  }
  return false;
}