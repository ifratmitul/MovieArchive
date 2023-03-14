import { TestBed } from '@angular/core/testing';

import { TrendingService } from './trending.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PaginatedApiResponse } from '../models/response';
import { MoviesDetails } from '../models/movieDetails';
import { trendingConfig } from '../config/trendingConfig';

describe('TrendingService', () => {
  let service: TrendingService;
  let httpMock: HttpTestingController;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [TrendingService, HttpClient]
    });
    service = TestBed.inject(TrendingService);
    httpMock = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should return an Observable<MoviesDetails[]>', () => {
    const mockApiResponse: PaginatedApiResponse<MoviesDetails> = {
      page: 1,
      total_pages: 1,
      total_results: 5,
      results: [
        {
          adult: false,
          backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
          genre_ids: [
            16,
            12,
            35,
            10751
          ],
          id: 315162,
          original_language: "en",
          original_title: "Puss in Boots: The Last Wish",
          overview: "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight of his nine lives, leaving him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
          popularity: 2531.473,
          poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
          release_date: "2022-12-07",
          title: "Puss in Boots: The Last Wish",
          video: false,
          vote_average: 8.4,
          vote_count: 4541
        },
        {
          adult: false,
          backdrop_path: "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
          genre_ids: [
            27,
            9648,
            53
          ],
          id: 631842,
          original_language: "en",
          original_title: "Knock at the Cabin",
          overview: "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
          popularity: 2101.02,
          poster_path: "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
          release_date: "2023-02-01",
          title: "Knock at the Cabin",
          video: false,
          vote_average: 6.5,
          vote_count: 983
        }
      ]
    };

    service.getTrendingMovieList().subscribe((movies: MoviesDetails[]) => {
      expect(movies.length).toBeLessThanOrEqual(5);
      expect(movies[0].id).toBe(315162);
      expect(movies[0].title).toBe('Puss in Boots: The Last Wish');
      expect(movies[0].name).toBeUndefined();
      expect(movies[1].id).toBe(631842);
    });

    const req = httpMock.expectOne(`${trendingConfig.trendingEndPoint}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockApiResponse);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
