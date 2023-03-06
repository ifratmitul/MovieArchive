import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit, OnChanges {
  ngOnInit(): void {
   console.log(this.details)
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.details)
  }

  imageBaseUrl:string = environment.imageBaseUrl;
  @Input() details: MoviesDetails | null = null;

  onSelect(id:number){
    //redirect to movie details
  }
}
