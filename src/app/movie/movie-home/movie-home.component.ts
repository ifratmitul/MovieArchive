import { Component, OnInit } from '@angular/core';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { TrendingService } from 'src/app/core/services/trending.service';
import { map, take } from 'rxjs';


@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {

  trendingMovieList : MoviesDetails[] = [];

  constructor(private trendingService: TrendingService) {}

  ngOnInit(): void {
    this.trendingService.getTrendingMovieList()
    .pipe(map((res:any) => res.results.slice(0,5)))
    .subscribe({
      next: (res:any) => {
        console.log(res);
        this.trendingMovieList = [...res]
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

}
