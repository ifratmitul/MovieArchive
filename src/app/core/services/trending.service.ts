import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TrendingService {
  private url = environment.baseUrl + 'trending/all/day'
  constructor(private http:HttpClient) { }

  getTrendingMovieList() {
    return this.http.get(this.url);
  }
}
