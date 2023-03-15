import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieDetailsComponent } from '../components/movie-details/movie-details.component';

const routes : Routes = [
  {path: '', component: MovieHomeComponent},
  {path: 'movie-list', component: MovieListComponent},
  {path: 'movie/details/:id', component: MovieDetailsComponent},
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
