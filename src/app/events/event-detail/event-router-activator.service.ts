import { Injectable } from '@angular/core';
import { EventService } from '../../services/event.service'
import {Router,CanActivate, ActivatedRouteSnapshot} from '@angular/router'
@Injectable()
export class EventRouteActivatorService implements CanActivate{
    constructor(private eventService:EventService, private router: Router){}

    canActivate(route: ActivatedRouteSnapshot){
        const eventExist = this.eventService.getEventById(+route.params['id'])
        if (eventExist){
            return true;
        }else{
            this.router.navigate(['/404'])
        }
    }
}