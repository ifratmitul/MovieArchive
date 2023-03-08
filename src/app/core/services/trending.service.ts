import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { trendingConfig } from '../config/trendingConfig';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  constructor(private http:HttpClient) { }

  getTrendingMovieList() {
    return this.http.get(trendingConfig.trendingEndPoint).pipe(map((res:any) => {
      if(res.results.length > 5) {
        return res.results.slice(0,5)
      }
      return res.results;
    }))
  }
}
