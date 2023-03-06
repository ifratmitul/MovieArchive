import { Component, OnInit } from '@angular/core';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { TrendingService } from 'src/app/core/services/trending.service';
import { map, take } from 'rxjs';
import { ThemeService } from 'src/app/core/services/theme.service';


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

  constructor(private trendingService: TrendingService, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.trendingService.getTrendingMovieList()
      .pipe(map((res: any) => res.results?.slice(0, 5)))
      .subscribe({
        next: (res: any) => {
          console.log(res);
          this.trendingMovieList = [...res]
        },
        error: (err: any) => {
          console.log(err);
        }
      })
  }

}
