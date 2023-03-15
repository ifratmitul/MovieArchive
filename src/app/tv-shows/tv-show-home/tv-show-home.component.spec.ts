import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowHomeComponent } from './tv-show-home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvShowsService } from '../tv-shows.service';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PaginatedApiResponse } from 'src/app/core/models/response';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { of } from 'rxjs';

describe('TvShowHomeComponent', () => {
  let component: TvShowHomeComponent;
  let fixture: ComponentFixture<TvShowHomeComponent>;
  let tvShowService: TvShowsService;

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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TvShowHomeComponent],
      imports: [HttpClientModule, HttpClientTestingModule, FilterComponent, BrowserAnimationsModule],
      providers: [TvShowsService, HttpClient]
    })
      .compileComponents();

    fixture = TestBed.createComponent(TvShowHomeComponent);
    component = fixture.componentInstance;
    tvShowService = TestBed.inject(TvShowsService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load movie list on init', () => {
    const spy = spyOn(tvShowService, 'getAllTvShows');
    spy.and.returnValue(of(mockResponse1));
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(1);
    expect(component.currentPageNo).toEqual(1);
    expect(component.tVseries).toEqual(mockResponse1.results);
  });

  it('should load more movies', () => {

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

    const spy = spyOn(tvShowService, 'getAllTvShows');
    spy.and.returnValues(of(mockResponse1), of(mockResponse2));
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(1);
    component.loadMore();
    expect(spy).toHaveBeenCalledWith(2);
    expect(component.currentPageNo).toEqual(2);
    expect(component.tVseries).toEqual([...mockResponse1.results, ...mockResponse2.results]);
  });

  it('should not load more movies if list is empty', () => {
    component.tVseries = [];
    component.loadMore();
    expect(spyOn(tvShowService, 'getAllTvShows')).not.toHaveBeenCalled();
  });
});
