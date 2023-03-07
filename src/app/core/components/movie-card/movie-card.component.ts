import { Component, Input } from '@angular/core';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { baseConfig } from '../../config/baseConfig';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {

  imageBaseUrl:string = baseConfig.imageBaseUrl;
  @Input() details: MoviesDetails | null = null;

  onSelect(id:number){
    console.log(id);
  }
}
