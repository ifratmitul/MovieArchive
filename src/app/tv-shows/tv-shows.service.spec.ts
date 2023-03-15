import { TestBed } from '@angular/core/testing';
import { TvShowsService } from './tv-shows.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';
import { PaginatedApiResponse } from '../core/models/response';
import { MoviesDetails } from '../core/models/movieDetails';
import { tvShowConfig } from '../core/config/tvShowConfig';
import { baseConfig } from '../core/config/baseConfig';

describe('TvShowsService', () => {
  let service: TvShowsService;
  let httpMock: HttpTestingController;
  let httpMock2: HttpTestingController;
  let httpMock3: HttpTestingController;
  const mockResponse1: PaginatedApiResponse<MoviesDetails> = {
    page: 1,
    total_pages: 500,
    total_results: 10000,
    results: [
      {
        "backdrop_path": "/uDgy6hyPd82kOHh6I95FLtLnj6p.jpg",
        "first_air_date": "2023-01-15",
        "genre_ids": [
          18
        ],
        "id": 100088,
        "name": "The Last of Us",
        "origin_country": [
          "US"
        ],
        "original_language": "en",
        "original_name": "The Last of Us",
        "overview": "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone. What starts as a small job soon becomes a brutal, heartbreaking journey, as they both must traverse the United States and depend on each other for survival.",
        "popularity": 6279.277,
        "poster_path": "/uKvVjHNqB5VmOrdxqAt2F7J78ED.jpg",
        "vote_average": 8.8,
        "vote_count": 2630
      },

      {
        "backdrop_path": "/3FLHePl9Y3n4BidLVjIA9qSRDOE.jpg",
        "first_air_date": "2021-08-03",
        "genre_ids": [
          10766
        ],
        "id": 130542,
        "name": "Bhagya Lakshmi",
        "origin_country": [
          "IN"
        ],
        "original_language": "hi",
        "original_name": "Bhagya Lakshmi",
        "overview": "Hailing from a middle-class family, Lakshmi’s life is upended when she realises that her marriage to Rishi Oberoi, an industrialist’s son, is a sham to keep his death at bay.",
        "popularity": 2154.81,
        "poster_path": "/7wuKrFvbX7kAIF0ctotARsqayPo.jpg",
        "vote_average": 5.2,
        "vote_count": 31
      }
    ]
  };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TvShowsService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
    });
    service = TestBed.inject(TvShowsService);
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


  it('should return an Tvshow list on call Observable<PaginatedApiResponse<MoviesDetails>>', () => {
    service.getAllTvShows(1).subscribe((shows: PaginatedApiResponse<MoviesDetails>) => {
      expect(shows.results.length).toBeGreaterThan(1);
      expect(shows.results[0].name).toBeTruthy();
    });

    const req = httpMock.expectOne(`${tvShowConfig.popularTvShowEndpoints}?page=${mockResponse1.page}&language=${tvShowConfig.defaultLanguage}&api_key=${baseConfig.api_key}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse1);
  });


  it('should return an top 5 Tvshow list on call Observable<MoviesDetails[]>', () => {
    service.getTodaysLiveTvShows().subscribe((shows: MoviesDetails[]) => {
      expect(shows.length).toBeLessThanOrEqual(5);
    });

    const req = httpMock.expectOne(`${tvShowConfig.todaysTvShowEndpoints}?language=${tvShowConfig.defaultLanguage}&api_key=${baseConfig.api_key}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse1);
  });


  it('should return an tvshow details on call Observable<MoviesDetails>', () => {
    service.getTvShowDetails(mockResponse1.results[0].id).subscribe((movie: MoviesDetails) => {
      expect(movie.name).toEqual(mockResponse1.results[0].name);
    });

    const req = httpMock2.expectOne(`${tvShowConfig.tvShowDetails}/${mockResponse1.results[0].id}?api_key=${baseConfig.api_key}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse1.results[0]);
  });
});
