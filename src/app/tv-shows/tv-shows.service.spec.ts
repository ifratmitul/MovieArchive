import { TestBed } from '@angular/core/testing';
import { TvShowsService } from './tv-shows.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('TvShowsService', () => {
  let service: TvShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [TvShowsService, HttpClient],
    });
    service = TestBed.inject(TvShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
