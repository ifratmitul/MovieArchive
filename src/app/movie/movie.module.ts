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
import {MatAutocompleteModule} from '@angular/material/autocomplete'
import { AutoCompleteComponent } from './components/auto-complete/auto-complete.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { CoreModule } from '../core/core.module';
import { FilterComponent } from '../components/filter/filter.component';
import { MovieCardComponent } from '../components/movie-card/movie-card.component';

@NgModule({
  declarations: [
    MovieHomeComponent,
    AutoCompleteComponent,
    MovieListComponent
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
    MatAutocompleteModule,
    ReactiveFormsModule,
    FilterComponent,
    MovieCardComponent
  ]
})
export class MovieModule { }
