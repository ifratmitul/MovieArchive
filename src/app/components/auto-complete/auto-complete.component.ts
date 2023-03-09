import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { Observable, debounceTime, distinctUntilChanged, map, mergeMap, startWith, switchMap } from 'rxjs';

//material import
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MovieService } from 'src/app/movie/movie.service';
import { MatInputModule } from '@angular/material/input';
import { baseConfig } from 'src/app/core/config/baseConfig';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auto-complete',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, MatInputModule, MatFormFieldModule, MatSelectModule, MatAutocompleteModule],
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
  myControl = new FormControl('');
  imageUrl = baseConfig.imageBaseUrl;
  options: MoviesDetails[] = [];
  filteredOptions: Observable<MoviesDetails[] >| null = null;

  constructor(private movieService: MovieService, private router : Router) { }

  ngOnInit() {
    this.listenToSearch();
  }

  listenToSearch() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      mergeMap((query: string | null) => {
        if (!query) []
        return this.movieService.searchMovie(query!).pipe(
          map((res: MoviesDetails[]) => res)
        );
      })
    )
  }

  onSelect(id:any) {
    console.log(id);
    this.router.navigate(['movie', 'details', id])
  }

}
