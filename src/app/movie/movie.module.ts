import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieHomeComponent } from './movie-home/movie-home.component';
import { MovieRoutingModule } from './movie-routing.module';

//material ui component module import
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatInputModule } from '@angular/material/input';
import { MatExpansionModule } from '@angular/material/expansion';
import { MovieCardComponent } from './components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    MovieHomeComponent,
    MovieCardComponent
  ],
  imports: [
    CommonModule,
    MovieRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
  ]
})
export class MovieModule { }
