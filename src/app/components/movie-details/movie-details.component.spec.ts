// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { of } from 'rxjs';

// import { MovieDetailsComponent } from './movie-details.component';
// import { MovieService } from 'src/app/movie/movie.service';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ActivatedRoute } from '@angular/router';

// describe('MovieDetailsComponent', () => {
//   let component: MovieDetailsComponent;
//   let fixture: ComponentFixture<MovieDetailsComponent>;
//   let movieService: MovieService;

//   const mockMovie = {
//     "adult": false,
//     "backdrop_path": "/pxJbfnMIQQxCrdeLD0zQnWr6ouL.jpg",
//     "belongs_to_collection": null,
//     "budget": 0,
//     "genres": [
//         {
//             "id": 28,
//             "name": "Action"
//         },
//         {
//             "id": 35,
//             "name": "Comedy"
//         },
//         {
//             "id": 53,
//             "name": "Thriller"
//         }
//     ],
//     "homepage": "https://www.amazon.com/dp/B0B6B6B9RY/",
//      id: 1,
//     "imdb_id": "tt26198528",
//     "original_language": "en",
//     "original_title": "Die Hart",
//     "overview": "Kevin Hart - playing a version of himself - is on a death-defying quest to become an action star. And with a little help from John Travolta, Nathalie Emmanuel, and Josh Hartnett - he just might pull it off.",
//     "popularity": 2691.49,
//     "poster_path": "/1EnBjTJ5utgT1OXYBZ8YwByRCzP.jpg",
//     "production_companies": [
//         {
//             "id": 40268,
//             "logo_path": "/shdAxUj8uF6exNLrF0kSqYVxCzG.png",
//             "name": "HartBeat Productions",
//             "origin_country": "US"
//         }
//     ],
//     "production_countries": [
//         {
//             "iso_3166_1": "US",
//             "name": "United States of America"
//         }
//     ],
//     "release_date": "2023-02-22",
//     "revenue": 0,
//     "runtime": 85,
//     "spoken_languages": [
//         {
//             "english_name": "English",
//             "iso_639_1": "en",
//             "name": "English"
//         }
//     ],
//     "status": "Released",
//     "tagline": "Live to change",
//     "title": "Die Hart",
//     "video": false,
//     "vote_average": 6.262,
//     "vote_count": 168
// };

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ HttpClientTestingModule, MovieDetailsComponent ],
//       providers: [
//         MovieService,
//         {
//           provide: ActivatedRoute,
//           useValue: { snapshot: { paramMap: { get: () => '1' } } }
//         }
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(MovieDetailsComponent);
//     component = fixture.componentInstance;
//     movieService = TestBed.inject(MovieService);
//     spyOn(movieService, 'getMovieDetails').and.returnValue(of(mockMovie));
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });

//   // it('should display movie details', () => {
//   //   const compiled = fixture.nativeElement;
//   //   expect(compiled.querySelector('h1').textContent).toContain(mockMovie.title);
//   //   expect(compiled.querySelector('p').textContent).toContain(mockMovie.director);
//   //   expect(compiled.querySelector('p').textContent).toContain(mockMovie.releaseYear);
//   // });
// });
