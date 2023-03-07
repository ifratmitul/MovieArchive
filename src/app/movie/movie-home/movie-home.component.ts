import { Component, OnInit } from '@angular/core';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { TrendingService } from 'src/app/core/services/trending.service';
import { forkJoin, map, take } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';
import { MovieService } from '../movie.service';
import { TvShowsService } from 'src/app/tv-shows/tv-shows.service';


@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {

  heroCoverImage = [
    '/assets/images/hero.jpg',
    'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/tlEFuIlaxRPXIYVHXbOSAMCfWqk.jpg',
    'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/uozb2VeD87YmhoUP1RrGWfzuCrr.jpg',
    'https://www.themoviedb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,00192f,00baff)/sfjqJDmNqMIImO5khiddb9TARvO.jpg'
  ]
  trendingMovieList: MoviesDetails[] = [];
  latestMovie: MoviesDetails[] = [];
  todaysTvShows : any [] = []


  constructor(private trendingService: TrendingService, private movieService: MovieService, private tvshowService:TvShowsService) { }

  ngOnInit(): void {
    forkJoin({
      trending: this.trendingService.getTrendingMovieList(),
      latestMovie: this.movieService.getLatestMovies(),
      tvshows: this.tvshowService.getTodaysLiveTvShows()
    }).subscribe({
      next: (res: any) => {
        console.log(res)
        this.trendingMovieList = [...res.trending]
        this.latestMovie = [...res.latestMovie]
        this.todaysTvShows = [...res.tvshows]

      },
      error: (err: any) => {

      }
    })
  }

}
