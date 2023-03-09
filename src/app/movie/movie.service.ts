import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { PaginatedApiResponse } from '../core/models/response';
import { MoviesDetails } from '../core/models/movieDetails';
import { movieConfig } from '../core/config/movieConfig';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private http: HttpClient) { }

  getMovies(pageNo: number, language: string = movieConfig.defaultLanguage): Observable<PaginatedApiResponse<MoviesDetails>> {
    return this.http.get<PaginatedApiResponse<MoviesDetails>>(movieConfig.latestMovieEndPoint, {
      params: {
        language: language,
        page: pageNo
      }
    })
  }

  getLatestMovies() : Observable<MoviesDetails[]> {
    return this.http.get<PaginatedApiResponse<MoviesDetails>>(movieConfig.latestMovieEndPoint, {
      params: {
        language: movieConfig.defaultLanguage
      }
    }).pipe(map((res: PaginatedApiResponse<MoviesDetails>) => {
      if (res.results.length > 5) {
        return res.results.slice(0, 5);
      }
      return res.results;
    }))
  }

  searchMovie(query:string) {
    return this.http.get(movieConfig.searchMovieEndPoint, {
      params: {
        query : query
      }
    })
  }

  getMovieDetails(id:any) {
    return this.http.get(`${movieConfig.movieDetailsEndPoint}/${id}`)
  }
}
