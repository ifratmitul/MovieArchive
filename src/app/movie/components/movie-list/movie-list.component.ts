import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { filter } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit {
 
  currentPage:number = 1;
  movieList: MoviesDetails[] = []

  constructor(private movieService:MovieService) {}

  ngOnInit(): void {
    this.loadMovieList()
  }
  loadMovieList(query:any = null) {
    this.movieService.getMovies(this.currentPage, 'en-US').subscribe({
      next: (res:any) => {
        console.log(res);
        this.currentPage = res.page;
        this.movieList = [...this.movieList, ...res.results];
        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })
  }

  loadMore() {
    this.currentPage++;
    this.loadMovieList();
  }

  onFilterEmitt(event:any) {
    console.log(event);
  }

}
