import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PaginatedApiResponse } from '../core/models/response';
import { People, PeopleDetails } from '../core/models/people';
import { peoplesConfig } from '../core/config/peoplesConfig';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor(private http: HttpClient) { }

  getPeopleList(pageNo: number): Observable<PaginatedApiResponse<People>> {
    return this.http.get<PaginatedApiResponse<People>>(peoplesConfig.peoplePopularEndpoints, {
      params: {
        page: pageNo,
        language: peoplesConfig.language
      }
    })
  }

  getDetails(id: number) : Observable<PeopleDetails> {
    return this.http.get<PeopleDetails>(`${peoplesConfig.peopleDetailsEndpoints}/${id}`);
  }
}
