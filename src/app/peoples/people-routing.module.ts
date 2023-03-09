import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PeopleHomeComponent } from './people-home/people-home.component';
import { PeopleDetailsComponent } from './people-details/people-details.component';

const routes : Routes = [
  {path: '' , component: PeopleHomeComponent},
  {path: 'details/:id' , component: PeopleDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class PeopleRoutingModule { }
