import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TvShowHomeComponent } from './tv-show-home/tv-show-home.component';
import { TvShowRoutingModule } from './tv-show-routing.module';
import { CoreModule } from '../core/core.module';



@NgModule({
  declarations: [
    TvShowHomeComponent
  ],
  imports: [
    CommonModule,
    TvShowRoutingModule,
    CoreModule
  ]
})
export class TvShowsModule { }
