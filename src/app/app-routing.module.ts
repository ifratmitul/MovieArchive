import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./movie/movie.module').then(mod => mod.MovieModule)},
  {path: 'tv-shows', loadChildren: () => import('./tv-shows/tv-shows.module').then(mod => mod.TvShowsModule)},
  {path: 'people', loadChildren: () => import('./peoples/peoples.module').then(mod => mod.PeoplesModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
