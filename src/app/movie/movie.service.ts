import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  private url = `${environment.baseUrl}movie`
  constructor(private http:HttpClient) { }

  getMovies(pageNo:number, language:string) {
    return this.http.get(`${this.url}/popular`, {
      params: {
        language: language,
        page: pageNo
      }
    })
  }

  getLatestMovies() {
    console.log('latest movie');
    
    return this.http.get(`${this.url}/now_playing`, {
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
