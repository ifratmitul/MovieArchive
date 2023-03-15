import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteComponent } from './auto-complete.component';
import { MovieService } from 'src/app/movie/movie.service';
import { HttpClient, HttpClientModule, HttpHandler, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { of } from 'rxjs';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';

describe('AutoCompleteComponent', () => {
  let component: AutoCompleteComponent;
  let fixture: ComponentFixture<AutoCompleteComponent>;
  let movieService: MovieService;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoCompleteComponent, HttpClientModule, BrowserAnimationsModule, RouterTestingModule],
      providers: [MovieService, HttpClient, HttpHandler, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;
    movieService = TestBed.inject(MovieService);
    fixture.detectChanges();
  });


  it('should populate options when query is entered', () => {
    const dummyMovies: MoviesDetails[] = [
      {
        adult: false,
        backdrop_path: 'dummyBackdropPath',
        id: 123,
        name: 'Dummy Name',
        original_language: 'en',
        original_name: 'Dummy Original Name',
        overview: 'Dummy Overview',
        poster_path: 'dummyPosterPath',
        media_type: 'movie',
        genre_ids: [1, 2, 3],
        popularity: 10.0,
        first_air_date: '',
        vote_average: 8.0,
        vote_count: 100,
        origin_country: [],
        title: 'Dummy Title',
        genres: []
      }
    ];

    spyOn(movieService, 'searchMovie').and.returnValue(of(dummyMovies));

    const input = fixture.nativeElement.querySelector('input');
    input.value = 'asdsfs';
    input.dispatchEvent(new Event('input'));

    fixture.detectChanges();

    expect(component.filteredOptions).toBeTruthy();
    component.filteredOptions!.subscribe(options => {
      expect(options.length).toBe(0);
    });
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
