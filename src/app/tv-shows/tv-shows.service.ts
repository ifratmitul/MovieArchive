import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TvShowsService {

  constructor(private http:HttpClient) { }

  getTodaysLiveTvShows() {
    return this.http.get(`${environment.baseUrl}tv/airing_today`, {
      params: {
        language: 'en-US'
      }
    }).pipe(map((res:any) => {
      console.log(res);
      
      if(res.results.length > 5) {
        return res.results.slice(0,5);
      }
      return res.results;
    }))
  }
}
