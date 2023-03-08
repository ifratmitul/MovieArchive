import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';

const routes : Routes = [
  {path: '', component: MovieHomeComponent},
  {path: 'movie-list', component: MovieListComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
