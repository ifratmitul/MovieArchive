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

  getMovies(pageNo: number): Observable<PaginatedApiResponse<MoviesDetails>> {
    return this.http.get<PaginatedApiResponse<MoviesDetails>>(movieConfig.latestMovieEndPoint, {
      params: {
        language: movieConfig.defaultLanguage,
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
      if (res?.results?.length > 5) {
        return res.results.slice(0, 5);
      }
      return res.results;
    }))
  }

  searchMovie(query:string) : Observable<MoviesDetails[]> {
    return this.http.get<PaginatedApiResponse<MoviesDetails>>(movieConfig.searchMovieEndPoint, {
      params: {
        query : query
      }
    }).pipe(map((res: PaginatedApiResponse<MoviesDetails>) => {
      if (res?.results?.length > 5) {
        return res.results.slice(0, 5);
      }
      return res?.results;
    }))
  }

  getMovieDetails(id:any) : Observable<MoviesDetails> {
    return this.http.get<MoviesDetails>(`${movieConfig.movieDetailsEndPoint}/${id}`)
  }
}
