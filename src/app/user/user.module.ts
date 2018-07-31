import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { NgModule } from  '@angular/core'
import { userRoutes } from './user.routes'
//components
import {ProfileComponent} from './user-profile.component'

@NgModule({
        declarations:[
            ProfileComponent
        ],
        imports:[
            CommonModule,
            RouterModule.forChild(userRoutes)
        ]
})
export class UserModule{}