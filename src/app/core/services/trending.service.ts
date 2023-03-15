import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { trendingConfig } from '../config/trendingConfig';
import { PaginatedApiResponse } from '../models/response';
import { MoviesDetails } from '../models/movieDetails';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  constructor(private http:HttpClient) { }

  getTrendingMovieList() : Observable<MoviesDetails[]> {
    return this.http.get<PaginatedApiResponse<MoviesDetails>>(trendingConfig.trendingEndPoint).pipe(map((res:PaginatedApiResponse<MoviesDetails>) => {
      if(res.results.length > 5) {
        return res.results.slice(0,5)
      }
      return res.results;
    }))
  }
}
