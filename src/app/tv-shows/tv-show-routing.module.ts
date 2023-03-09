import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { TvShowHomeComponent } from './tv-show-home/tv-show-home.component';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';

const routes:Routes = [
  {path:'', component: TvShowHomeComponent},
  {path:'tv/details/:id', component: MovieCardComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class TvShowRoutingModule { }
