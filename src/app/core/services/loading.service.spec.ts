import { TestBed } from '@angular/core/testing';
import { NgxSpinnerService } from 'ngx-spinner';
import { LoadingService } from './loading.service';

describe('LoadingService', () => {
  let service: LoadingService;
  let spinnerServiceSpy: jasmine.SpyObj<NgxSpinnerService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('NgxSpinnerService', ['show', 'hide']);

    TestBed.configureTestingModule({
      providers: [LoadingService, { provide: NgxSpinnerService, useValue: spy }]
    });
    service = TestBed.inject(LoadingService);
    spinnerServiceSpy = TestBed.inject(NgxSpinnerService) as jasmine.SpyObj<NgxSpinnerService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('busy', () => {
    it('should increment busyRequestCount and show spinner', () => {
      service.busy();
      expect(service['busyRequestCount']).toBe(1);
      expect(spinnerServiceSpy.show).toHaveBeenCalled();
    });
  });

  describe('idle', () => {
    it('should decrement busyRequestCount and hide spinner when count reaches 0', () => {
      service['busyRequestCount'] = 1;
      service.idle();
      expect(service['busyRequestCount']).toBe(0);
      expect(spinnerServiceSpy.hide).toHaveBeenCalled();
    });

    it('should not hide spinner when busyRequestCount is greater than 0', () => {
      service['busyRequestCount'] = 2;
      service.idle();
      expect(service['busyRequestCount']).toBe(1);
      expect(spinnerServiceSpy.hide).not.toHaveBeenCalled();
    });
  });
});
