import { TestBed } from '@angular/core/testing';
import { TvShowsService } from './tv-shows.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { TokenInterceptor } from '../core/interceptors/token.interceptor';

describe('TvShowsService', () => {
  let service: TvShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [TvShowsService, HttpClient, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }],
    });
    service = TestBed.inject(TvShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
