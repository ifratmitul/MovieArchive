import { Component, Input } from '@angular/core';
import { MoviesDetails } from 'src/app/core/models/movieDetails';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  @Input() details: MoviesDetails | null = null;


  onSelect(id:number){
    //redirect to movie details
  }
}
