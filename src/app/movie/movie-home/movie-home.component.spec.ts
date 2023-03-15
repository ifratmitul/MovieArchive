import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHomeComponent } from './movie-home.component';
import { TrendingService } from 'src/app/core/services/trending.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AutoCompleteComponent } from 'src/app/components/auto-complete/auto-complete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';
import { MovieService } from '../movie.service';
import { TvShowsService } from 'src/app/tv-shows/tv-shows.service';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { of } from 'rxjs';

describe('MovieHomeComponent', () => {
  let component: MovieHomeComponent;
  let fixture: ComponentFixture<MovieHomeComponent>;
  let trendingServiceSpy: TrendingService;
  let movieServiceSpy: MovieService;
  let tvShowServiceSpy: TvShowsService;

  const mockData = [
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


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MovieHomeComponent],
      imports: [HttpClientTestingModule, HttpClientModule, AutoCompleteComponent, BrowserAnimationsModule],
      providers: [TrendingService, MovieService, TvShowsService]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MovieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    trendingServiceSpy = TestBed.inject(TrendingService)
    movieServiceSpy = TestBed.inject(MovieService)
    tvShowServiceSpy = TestBed.inject(TvShowsService)
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should set trending movies, latest movies, and today\'s TV shows on ngOnInit', () => {
    const trendingMovies: MoviesDetails[] = [...mockData];
    const latestMovies: MoviesDetails[] = [...mockData];
    const todaysTvShows: MoviesDetails[] = [...mockData];

    spyOn(trendingServiceSpy, 'getTrendingMovieList').and.returnValue(of(trendingMovies));
    spyOn(movieServiceSpy, 'getLatestMovies').and.returnValue(of(latestMovies));
    spyOn(tvShowServiceSpy, 'getTodaysLiveTvShows').and.returnValue(of(todaysTvShows));

    component.ngOnInit()

    expect(component.trendingMovieList.length).toEqual(trendingMovies.length);
    expect(component.latestMovie.length).toEqual(latestMovies.length);
    expect(component.todaysTvShows.length).toEqual(todaysTvShows.length);
  });
});
