import { TestBed } from '@angular/core/testing';

import { TrendingService } from './trending.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

describe('TrendingService', () => {
  let service: TrendingService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [TrendingService, HttpClient]
    });
    service = TestBed.inject(TrendingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
