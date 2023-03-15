import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { PaginatedApiResponse } from '../core/models/response';
import { MoviesDetails } from '../core/models/movieDetails';
import { tvShowConfig } from '../core/config/tvShowConfig';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {
  
  constructor(private http: HttpClient) { }

  getAllTvShows(pageNo: number, language: string = tvShowConfig.defaultLanguage): Observable<PaginatedApiResponse<MoviesDetails>> {
    return this.http.get<PaginatedApiResponse<MoviesDetails>>(tvShowConfig.popularTvShowEndpoints, {
      params: {
        page: pageNo,
        language: language
      }
    })
  }

  getTodaysLiveTvShows(): Observable<MoviesDetails[]> {
    return this.http.get<PaginatedApiResponse<MoviesDetails>>(tvShowConfig.todaysTvShowEndpoints, {
      params: {
        language: tvShowConfig.defaultLanguage
      }
    }).pipe(map((res: PaginatedApiResponse<MoviesDetails>) => {
      if (res.results.length > 5) {
        return res.results.slice(0, 5);
      }
      return res.results;
    }))
  }

  getTvShowDetails (id:number) : Observable<MoviesDetails> {
    return this.http.get<MoviesDetails>(`${tvShowConfig.tvShowDetails}/${id}`);
  }
}
