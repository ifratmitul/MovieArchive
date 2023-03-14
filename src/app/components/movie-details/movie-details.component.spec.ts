import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { MovieService } from 'src/app/movie/movie.service';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { TvShowsService } from 'src/app/tv-shows/tv-shows.service';
import { MovieDetailsComponent } from './movie-details.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('MovieDetailsComponent', () => {
    let component: MovieDetailsComponent;
    let fixture: ComponentFixture<MovieDetailsComponent>;
    let movieServiceSpy: MovieService;
    let tvShowServiceSpy: TvShowsService;
    let routerSpy: Router;
    let activatedRouteSpy: ActivatedRoute;

    beforeEach(async () => {
        activatedRouteSpy = jasmine.createSpyObj('ActivatedRoute', [], {
            snapshot: { params: { id: 315162 }, routeConfig: { path: 'movies/:id' } },
        });
        await TestBed.configureTestingModule({
            imports: [MovieDetailsComponent, HttpClientTestingModule, HttpClientModule],
            providers: [
                HttpClient,
                MovieService,
                TvShowsService,
                { provide: ActivatedRoute, useValue: activatedRouteSpy },
                Router
            ],
        }).compileComponents();

        movieServiceSpy = TestBed.inject(MovieService)
        tvShowServiceSpy = TestBed.inject(TvShowsService)
        routerSpy = TestBed.inject(Router)

    });

    beforeEach(() => {
        fixture = TestBed.createComponent(MovieDetailsComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch movie details', () => {
        const movieDetails: MoviesDetails = {
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
            overview: "Ping him with only one life left. Puss sets out on an epic journey to find the mythical Last Wish and restore his nine lives.",
            popularity: 2531.473,
            poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
            release_date: "2022-12-07",
            title: "Puss in Boots: The Last Wish",
            video: false,
            vote_average: 8.4,
            vote_count: 4541
        }

        const spy = spyOn(movieServiceSpy, 'getMovieDetails');
        spy.and.returnValue(of(movieDetails));
        component.ngOnInit();
        expect(component.movieDetails).toEqual(movieDetails);
    });

    it('should fetch TV show details', () => {
        activatedRouteSpy.snapshot.routeConfig!.path = 'tv/:id';
        activatedRouteSpy.snapshot.params['id'] = 100088;
        const movieDetails: MoviesDetails = {
            adult: false,
            backdrop_path: "/jr8tSoJGj33XLgFBy6lmZhpGQNu.jpg",
            genre_ids: [
                16,
                12,
                35,
                10751
            ],
            id: 100088,
            original_language: "en",
            original_title: "Puss in Boots: The Last Wish",
            overview: "Puss in Boots discovers that his passion for adventure has taken its toll: He has burned through eight",
            popularity: 2531.473,
            poster_path: "/kuf6dutpsT0vSVehic3EZIqkOBt.jpg",
            release_date: "2022-12-07",
            title: "The Last of Us",
            video: false,
            vote_average: 8.4,
            vote_count: 4541
        };

        const spy = spyOn(tvShowServiceSpy, 'getTvShowDetails');
        spy.and.returnValue(of(movieDetails));
        component.ngOnInit();
        expect(component.movieDetails?.title).toEqual(movieDetails.title);
    });

    it('should navigate to home page when no ID is provided', () => {
        activatedRouteSpy.snapshot.params['id'] = undefined;
        const spy = spyOn(routerSpy, 'navigateByUrl')
        component.ngOnInit();
        expect(spy).toHaveBeenCalledWith('/');
    });
});
