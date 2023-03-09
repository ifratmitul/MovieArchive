import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowHomeComponent } from './tv-show-home/tv-show-home.component';
import { TvShowRoutingModule } from './tv-show-routing.module';
import { CoreModule } from '../core/core.module';
import { FilterComponent } from '../components/filter/filter.component';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';

//material
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    TvShowHomeComponent
  ],
  imports: [
    CommonModule,
    TvShowRoutingModule,
    CoreModule,
    FilterComponent,
    MovieCardComponent,
    MatButtonModule
  ]
})
export class TvShowsModule { }
