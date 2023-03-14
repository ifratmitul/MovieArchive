import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpHandler } from '@angular/common/http';
import { MovieService } from '../../movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { PaginatedApiResponse } from 'src/app/core/models/response';
import { of } from 'rxjs';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;
  let movieService: MovieService

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieListComponent],
      imports: [HttpClientTestingModule, FilterComponent, BrowserAnimationsModule],
      providers: [MovieService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load movie list on init', () => {
    const mockResponse: PaginatedApiResponse<MoviesDetails> = {
      page: 1,
      total_pages: 500,
      total_results: 10000,
      results: [{
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
      }]
    };
    const spy = spyOn(movieService, 'getMovies');
    spy.and.returnValue(of(mockResponse));
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(1);
    expect(component.currentPage).toEqual(1);
    expect(component.movieList).toEqual(mockResponse.results);
  });

  it('should load more movies', () => {
    const mockResponse1: PaginatedApiResponse<MoviesDetails> = {
      page: 1,
      total_pages: 500,
      total_results: 10000,
      results: [{
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
      }]
    };
    const mockResponse2: PaginatedApiResponse<MoviesDetails> = {
      page: 2,
      total_pages: 500,
      total_results: 10000,
      results: [
        {
          adult: false,
          backdrop_path: "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
          genre_ids: [
            27,
            9648,
            53
          ],
          id: 630842,
          original_language: "en",
          original_title: "Knock at the Cabin",
          overview: "While vacationing at a remote cabin, a young girl and her two fathers are taken hostage by four armed strangers who demand that the family make an unthinkable choice to avert the apocalypse. With limited access to the outside world, the family must decide what they believe before all is lost.",
          popularity: 2101.02,
          poster_path: "/dm06L9pxDOL9jNSK4Cb6y139rrG.jpg",
          release_date: "2023-02-01",
          title: "Knock at the Cabin Test",
          video: false,
          vote_average: 6.5,
          vote_count: 983
        }]
    };

    const spy = spyOn(movieService, 'getMovies');

    spy.and.returnValues(of(mockResponse1), of(mockResponse2));
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(1);
    component.loadMore();
    expect(spy).toHaveBeenCalledWith(2);
    expect(component.currentPage).toEqual(2);
    expect(component.movieList).toEqual([...mockResponse1.results, ...mockResponse2.results]);
  });

  it('should not load more movies if list is empty', () => {
    component.movieList = [];
    component.loadMore();
    expect(spyOn(movieService, 'getMovies')).not.toHaveBeenCalled();
  });
});
