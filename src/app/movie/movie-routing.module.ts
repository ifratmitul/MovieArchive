import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieHomeComponent } from './movie-home/movie-home.component';

const routes : Routes = [
  {path: '', component: MovieHomeComponent}
]


@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class MovieRoutingModule { }
