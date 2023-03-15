import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS, HttpClient, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

import { LoadingInterceptor } from './loading.interceptor';
import { LoadingService } from '../services/loading.service';

describe('LoadingInterceptor', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let loadingService: LoadingService;
  let ngxSpinnerService: NgxSpinnerService;
  let interceptor: LoadingInterceptor;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        LoadingInterceptor,
        LoadingService,
        NgxSpinnerService,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: LoadingInterceptor,
          multi: true
        }
      ]
    });

    httpClient = TestBed.inject(HttpClient);
    httpTestingController = TestBed.inject(HttpTestingController);
    loadingService = TestBed.inject(LoadingService);
    ngxSpinnerService = TestBed.inject(NgxSpinnerService);
    interceptor = TestBed.inject(LoadingInterceptor);
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should intercept HTTP requests and show spinner', () => {
    const request = new HttpRequest('GET', '/data');
    const expectedResponse = { data: 'test data' };

    spyOn(loadingService, 'busy').and.callThrough();
    spyOn(loadingService, 'idle').and.callThrough();
    spyOn(ngxSpinnerService, 'show').and.callThrough();
    spyOn(ngxSpinnerService, 'hide').and.callThrough();

    httpClient.get('/data').subscribe();

    const req = httpTestingController.expectOne(request);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedResponse);

    expect(loadingService.busy).toHaveBeenCalled();
    expect(loadingService.idle).toHaveBeenCalled();
    expect(ngxSpinnerService.show).toHaveBeenCalled();
    expect(ngxSpinnerService.hide).toHaveBeenCalled();
  });

  it('should finalize the request with the spinner hidden', () => {
    const request = new HttpRequest('GET', '/data');
    const expectedResponse = { data: 'test data' };

    httpClient.get('/data').pipe(
      finalize(() => {
        expect(ngxSpinnerService.show).toHaveBeenCalled();
        expect(ngxSpinnerService.hide).toHaveBeenCalled();
      })
    ).subscribe();

    const req = httpTestingController.expectOne(request);
    expect(req.request.method).toEqual('GET');

    req.flush(expectedResponse);
  });
});
