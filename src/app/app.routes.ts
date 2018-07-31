import { EventListComponent } from "./events/events-list.component"
import { EventDetailComponent } from "./events/event-detail/event-detail.component"
import { CreateEventComponent } from './events/create-event.component'
import { Error404Component } from './errors/404.component'
import { EventRouteActivatorService } from './events/event-detail/event-router-activator.service'
import { Routes } from "../../node_modules/@angular/router";

export const appRoutes:Routes = [
    {path:'events/new', component: CreateEventComponent, canDeactivate:['checkMyDirtyState']},
    { path:'events', component: EventListComponent },
    { path: 'events/:id', component: EventDetailComponent,canActivate:[EventRouteActivatorService] },
    { path: '', redirectTo: '/events', pathMatch: 'full'},
    {path:'404', component:Error404Component },
    {path:'user', loadChildren:"./user/user.module#UserModule"}
]