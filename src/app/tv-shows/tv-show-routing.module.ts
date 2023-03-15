import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TvShowHomeComponent } from './tv-show-home/tv-show-home.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';

const routes:Routes = [
  {path:'', component: TvShowHomeComponent},
  {path:'tv/details/:id', component: MovieDetailsComponent}
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[RouterModule]
})
export class TvShowRoutingModule { }
