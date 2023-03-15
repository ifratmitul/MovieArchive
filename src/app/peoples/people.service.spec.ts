import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';

import { PeopleService } from './people.service';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';
import { PaginatedApiResponse } from '../core/models/response';
import { People, PeopleDetails } from '../core/models/people';
import { peoplesConfig } from '../core/config/peoplesConfig';
import { baseConfig } from '../core/config/baseConfig';

describe('PeopleService', () => {
  let service: PeopleService;
  let httpMock: HttpTestingController;
  let httpMock2: HttpTestingController;
  let httpMock3: HttpTestingController;
  const mockResponse1: PaginatedApiResponse<People> = {
    page: 1,
    total_pages: 500,
    total_results: 10000,
    results: [{
      "adult": false,
      "gender": 2,
      "id": 1253360,
      "known_for_department": "Acting",
      "name": "Pedro Pascal",
      "popularity": 386.967,
      "profile_path": "/nms0d0ExYtiOke82oqr3vOb3smF.jpg"
    },

    {
      "adult": false,
      "gender": 2,
      "id": 58021,
      "known_for_department": "Directing",
      "name": "Tinto Brass",
      "popularity": 270.156,
      "profile_path": "/80Uuq79rcYL1FgBPHAEHzAACQFa.jpg"
    }]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [PeopleService, HttpClient, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
    });
    service = TestBed.inject(PeopleService);
    httpMock = TestBed.inject(HttpTestingController);
    httpMock2 = TestBed.inject(HttpTestingController);
    httpMock3 = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
    httpMock2.verify();
    httpMock3.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an People list on call Observable<PaginatedApiResponse<People>>', () => {
    service.getPeopleList(1).subscribe((peoples: PaginatedApiResponse<People>) => {
      expect(peoples.results.length).toBeGreaterThan(1);
      expect(peoples.results[0].name).toBeTruthy();
    });

    const req = httpMock.expectOne(`${peoplesConfig.peoplePopularEndpoints}?page=${mockResponse1.page}&language=${peoplesConfig.language}&api_key=${baseConfig.api_key}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse1);
  });


  it('should return an People details on call Observable<PeopleDetails>', () => {
    service.getDetails(mockResponse1.results[0].id).subscribe((peoples: PeopleDetails) => {
      expect(peoples.name).toEqual(mockResponse1.results[0].name);
    });

    const req = httpMock.expectOne(`${peoplesConfig.peopleDetailsEndpoints}/${mockResponse1.results[0].id}?api_key=${baseConfig.api_key}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse1.results[0]);
  });
});
