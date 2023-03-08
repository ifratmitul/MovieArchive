import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';
import {debounce, debounceTime, distinctUntilChanged, map, startWith, switchMap} from 'rxjs/operators';
import { MoviesDetails } from 'src/app/core/models/movieDetails';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.scss']
})
export class AutoCompleteComponent implements OnInit {
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
