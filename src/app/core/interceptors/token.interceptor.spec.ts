import { TestBed } from '@angular/core/testing';

import { TokenInterceptor } from './token.interceptor';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpHandler, HttpRequest } from '@angular/common/http';
import { baseConfig } from '../config/baseConfig';

describe('TokenInterceptor', () => {
  let interceptor: TokenInterceptor;
  let httpMock: HttpTestingController;
  let httpHandler: HttpHandler;


  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [TokenInterceptor]
    });
    interceptor = TestBed.inject(TokenInterceptor);
    httpMock = TestBed.inject(HttpTestingController);
    httpHandler = TestBed.inject(HttpHandler);

  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should add api_key to request params', () => {
    const api_key = baseConfig.api_key;
    const request = new HttpRequest('GET', '/test');
    interceptor.intercept(request, httpHandler).subscribe(response => {
      expect(response).toBeTruthy();
    });

    const httpRequest = httpMock.expectOne(`/test?api_key=${baseConfig.api_key}`);
    expect(httpRequest.request.method).toEqual('GET');
    expect(httpRequest.request.params.get('api_key')).toEqual(api_key);
    httpRequest.flush({});
  });
});
