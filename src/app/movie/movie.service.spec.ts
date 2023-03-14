import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MovieService } from './movie.service';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { PaginatedApiResponse } from '../core/models/response';
import { MoviesDetails } from '../core/models/movieDetails';
import { movieConfig } from '../core/config/movieConfig';
import { baseConfig } from '../core/config/baseConfig';

describe('MovieService', () => {
  let service: MovieService;
  let httpMock: HttpTestingController;
  let httpMock2: HttpTestingController;
  let httpMock3: HttpTestingController;



  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [MovieService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
    });
    service = TestBed.inject(MovieService);
    httpMock = TestBed.inject(HttpTestingController);
    httpMock2 = TestBed.inject(HttpTestingController);
    httpMock3 = TestBed.inject(HttpTestingController);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an movie list on call Observable<PaginatedApiResponse<MoviesDetails>>', () => {
    const mockApiResponse: PaginatedApiResponse<MoviesDetails> = {
      page: 1,
      total_pages: 500,
      total_results: 10000,
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

    service.getMovies(1).subscribe((movies: PaginatedApiResponse<MoviesDetails>) => {
      expect(movies.results.length).toBeGreaterThan(1);
      expect(movies.results[0].title).toBeTruthy();
      expect(movies.results[0].name).toBeUndefined();
    });

    const req = httpMock.expectOne(`${movieConfig.latestMovieEndPoint}?language=${movieConfig.defaultLanguage}&page=1&api_key=${baseConfig.api_key}`);
    expect(req.request.method).toBe('GET');
    req.flush(mockApiResponse);
  });


/*
  it('should return top 5 movie Observable<MoviesDetails[]>', () => {
    const mockApiResponse: MoviesDetails[] = [
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

    service.getLatestMovies().subscribe((movies: MoviesDetails[]) => {
      expect(movies?.length).toBeLessThanOrEqual(5)
    });

    const req = httpMock2.expectOne(`${movieConfig.latestMovieEndPoint}?language=en-US&api_key=ed17b00619345e0f2c2d05d81e87028c`);
    expect(req.request.method).toBe('GET');
    req.flush(mockApiResponse);
  });
*/ 


  it('should return movie details Observable<MoviesDetails[]>', () => {
    const mockApiResponse: MoviesDetails =
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
      };
     

    service.getMovieDetails(315162).subscribe((movie: any) => {
      expect(movie).toBeTrue;
      expect(movie.title).toEqual("Puss in Boots: The Last Wish")
      expect(movie.name).toBeUndefined();
    });

    const req = httpMock3.expectOne(`${movieConfig.movieDetailsEndPoint}/${315162}?api_key=ed17b00619345e0f2c2d05d81e87028c`);
    expect(req.request.method).toBe('GET');
    req.flush(mockApiResponse);
  });
});
