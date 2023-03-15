import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { MovieCardComponent } from './movie-card.component';
import { baseConfig } from 'src/app/core/config/baseConfig';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { showType } from 'src/app/core/common/common.constant';
import { Router } from '@angular/router';

describe('MovieCardComponent', () => {
  let component: MovieCardComponent;
  let fixture: ComponentFixture<MovieCardComponent>;
  let router: Router;
  let element: DebugElement;
  const mockDetails: MoviesDetails =  {
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

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, MovieCardComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieCardComponent);
    component = fixture.componentInstance;
    router = TestBed.inject(Router);
    element = fixture.debugElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display movie details', () => {
    component.details = mockDetails;
    fixture.detectChanges();
    const image = fixture.nativeElement.querySelector('img');
    const title = fixture.nativeElement.querySelector('mat-card-title');
    expect(image.src).toContain(baseConfig.imageBaseUrl);
    expect(title.textContent).toContain(mockDetails.title);
  });

  it('should navigate to movie details on select', () => {
    const spy  = spyOn(router, 'navigate');
    component.details = mockDetails;
    component.type = showType.MOVIE;
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('a');
    card.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith(['/', 'movie', 'details', mockDetails.id]);
  });

  it('should navigate to TV show details on select', () => {
    const spy  = spyOn(router, 'navigate');
    component.details = mockDetails;
    component.type = showType.TVSHOW;
    fixture.detectChanges();
    const card = fixture.nativeElement.querySelector('a');
    card.dispatchEvent(new Event('click'));
    expect(spy).toHaveBeenCalledWith([ '/', 'tv-shows', 'tv', 'details', mockDetails.id]);
  });
});
