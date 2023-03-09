import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { baseConfig } from 'src/app/core/config/baseConfig';
import { MoviesDetails } from 'src/app/core/models/movieDetails';

//material import
import { MatCardModule } from '@angular/material/card';
import { Router } from '@angular/router';
import { showType } from 'src/app/core/common/common.constant';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  imageBaseUrl:string = baseConfig.imageBaseUrl;
  @Input() details: MoviesDetails | null = null;
  @Input() type: showType = showType.MOVIE;
  
  constructor(private router:Router) {}

  onSelect(id:number){
    console.log(id);
    console.log(this.type);
    if(this.type === showType.MOVIE) {
      this.router.navigate(['/', 'movie', 'details', id])
    }
    else {
      this.router.navigate(['/', 'tv-shows', 'tv', 'details', id])
    }
  }
}
