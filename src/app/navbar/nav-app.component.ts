import { Component } from '@angular/core'

@Component({
    selector:'nav-app',
    templateUrl:'nav-app.component.html',
    styles:[`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm { margin-right: 100px; }
        @media (max-width) { #searchForm {display:none;} }
        li > .active {color:#00FF00}
    `]

})
export class NavAppComponent{

}