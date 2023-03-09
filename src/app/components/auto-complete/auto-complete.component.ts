import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { Observable, debounceTime, distinctUntilChanged, map } from 'rxjs';

//material import
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'
import { MatAutocompleteModule } from '@angular/material/autocomplete';

@Component({
  selector: 'app-auto-complete',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,MatFormFieldModule, MatSelectModule, MatAutocompleteModule],
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent  implements OnInit {
  myControl = new FormControl('');
  options: MoviesDetails[] = [];
  filteredOptions: Observable<MoviesDetails[]> | null = null;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      // switchMap((query:string) => this.move)
      map((value:any) => this._filter(value || [])),
    );
  }

  private _filter(value: MoviesDetails[]): MoviesDetails[] {
    return value
  }
}
