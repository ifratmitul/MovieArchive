import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private url = environment.baseUrl + 'trending/all/day'
  constructor(private http:HttpClient) { }

  getTrendingMovieList() {
    return this.http.get(this.url).pipe(map((res:any) => {
      if(res.results.length > 5) {
        return res.results.slice(0,5)
      }
      return res.results;
    }))
  }

  // getTopTrendingMovie() {
  //   return this.http.get(this.url).pipe(map(res))
  // }
}
