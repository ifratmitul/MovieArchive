import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { PeopleRoutingModule } from './people-routing.module';
import { ActorCardComponent } from '../components/actor-card/actor-card.component';

//material
import { MatButtonModule } from '@angular/material/button';
import { PeopleDetailsComponent } from './people-details/people-details.component';


@NgModule({
  declarations: [
    PeopleHomeComponent,
    PeopleDetailsComponent
  ],
  imports: [
    CommonModule,
    PeopleRoutingModule,
    ActorCardComponent,
    MatButtonModule
  ]
})
export class PeoplesModule { }
