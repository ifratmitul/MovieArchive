import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MovieService } from 'src/app/movie/movie.service';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { baseConfig } from 'src/app/core/config/baseConfig';
import { ActorCardComponent } from '../actor-card/actor-card.component';
import { MatChipsModule } from '@angular/material/chips';
import { TvShowsService } from 'src/app/tv-shows/tv-shows.service';


@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [CommonModule, ActorCardComponent, MatChipsModule],
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {

  imageBaseUrl = baseConfig.imageBaseUrl;
  movieDetails: MoviesDetails | null = null;

  constructor(
    private movieService: MovieService,
    private tvShowService: TvShowsService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }


  ngOnInit(): void {
    const id = this.activatedRoute.snapshot.params['id']
    if (!id) {
      this.router.navigateByUrl('/');
    }
    console.log(this.activatedRoute)
    if (this.activatedRoute.snapshot.routeConfig?.path?.split('/').includes('tv')) {
      this.fetchShowInformation(id);
    }
    else {
      this.fetchShowInformation(id);
    }
  }

  fetchShowInformation(id: number) {
    this.movieService.getMovieDetails(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.movieDetails = { ...res }
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  fetchTvShowdetails(id: number) {
    this.tvShowService.getTvShowDetails(id).subscribe({
      next: (res: any) => {
        console.log(res);
        this.movieDetails = { ...res }
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

}
