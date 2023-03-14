import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleHomeComponent } from './people-home.component';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { PeopleService } from '../people.service';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';
import { People } from 'src/app/core/models/people';
import { of } from 'rxjs';
import { PaginatedApiResponse } from 'src/app/core/models/response';

describe('PeopleHomeComponent', () => {
  let component: PeopleHomeComponent;
  let fixture: ComponentFixture<PeopleHomeComponent>;
  let mockPeopleService: PeopleService;


  beforeEach(async () => {
    const spy = jasmine.createSpyObj('PeopleService', ['getPeopleList']);

    await TestBed.configureTestingModule({
      declarations: [ PeopleHomeComponent ],
      imports: [HttpClientModule],
      providers: [HttpClient, PeopleService, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }]
    })
    .compileComponents();
    fixture = TestBed.createComponent(PeopleHomeComponent);
    component = fixture.componentInstance;
    mockPeopleService = TestBed.inject(PeopleService)
    fixture.detectChanges();
  });


  beforeEach(() => {
    fixture = TestBed.createComponent(PeopleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load people list on init', () => {
    const mockResponse: PaginatedApiResponse<People> = {
      page: 1,
      total_pages: 500,
      total_results: 10000,
      results: [ {
        "adult": false,
        "gender": 2,
        "id": 1253360,
        "known_for_department": "Acting",
        "name": "Pedro Pascal",
        "popularity": 386.967,
        "profile_path": "/nms0d0ExYtiOke82oqr3vOb3smF.jpg"
      },
      
      {
          "adult": false,
          "gender": 2,
          "id": 58021,
          "known_for_department": "Directing",
          "name": "Tinto Brass",
          "popularity": 270.156,
          "profile_path": "/80Uuq79rcYL1FgBPHAEHzAACQFa.jpg"
      }]
    };
    const spy = spyOn(mockPeopleService, 'getPeopleList');
    spy.and.returnValue(of(mockResponse));
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(1);
    expect(component.currentPageNo).toEqual(1);
    expect(component.peopleList).toEqual(mockResponse.results);
  });

  it('should load more people', () => {
    const mockResponse1: PaginatedApiResponse<People> = {
      page: 1,
      total_pages: 500,
      total_results: 10000,
      results: [ {
        "adult": false,
        "gender": 2,
        "id": 1253360,
        "known_for_department": "Acting",
        "name": "Pedro Pascal",
        "popularity": 386.967,
        "profile_path": "/nms0d0ExYtiOke82oqr3vOb3smF.jpg"
      },
      
      {
          "adult": false,
          "gender": 2,
          "id": 58021,
          "known_for_department": "Directing",
          "name": "Tinto Brass",
          "popularity": 270.156,
          "profile_path": "/80Uuq79rcYL1FgBPHAEHzAACQFa.jpg"
      }]
    };
    const mockResponse2: PaginatedApiResponse<People> = {
      page: 2,
      total_pages: 500,
      total_results: 10000,
      results: [
        {
        "adult": false,
        "gender": 2,
        "id": 5801,
        "known_for_department": "Directing",
        "name": "Tinto Brass",
        "popularity": 270.156,
        "profile_path": "/80Uuq79rcYL1FgBPHAEHzAACQFa.jpg"
    }]
    };

    const spy = spyOn(mockPeopleService, 'getPeopleList');

    spy.and.returnValues(of(mockResponse1),of(mockResponse2));
    component.ngOnInit();
    expect(spy).toHaveBeenCalledWith(1);
    component.loadMore();
    expect(spy).toHaveBeenCalledWith(2);
    expect(component.currentPageNo).toEqual(2);
    expect(component.peopleList).toEqual([...mockResponse1.results, ...mockResponse2.results]);
  });

  it('should not load more people if list is empty', () => {
    component.peopleList = [];
    component.loadMore();
    expect(spyOn(mockPeopleService, 'getPeopleList')).not.toHaveBeenCalled();
  });
});
