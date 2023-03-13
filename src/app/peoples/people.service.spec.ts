import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [PeopleService, HttpClient],
    });
    service = TestBed.inject(PeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
