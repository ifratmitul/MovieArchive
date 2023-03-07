import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { PeopleRoutingModule } from './people-routing.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    PeopleHomeComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    CoreModule
  ]
})
export class PeoplesModule { }
