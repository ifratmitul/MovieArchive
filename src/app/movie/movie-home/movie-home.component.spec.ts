import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieHomeComponent } from './movie-home.component';
import { TrendingService } from 'src/app/core/services/trending.service';
import { HTTP_INTERCEPTORS, HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AutoCompleteComponent } from 'src/app/components/auto-complete/auto-complete.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from 'src/app/core/interceptors/token.interceptor';

describe('MovieHomeComponent', () => {
  let component: MovieHomeComponent;
  let fixture: ComponentFixture<MovieHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieHomeComponent ],
      imports: [HttpClientTestingModule, HttpClientModule, AutoCompleteComponent, BrowserAnimationsModule],
      providers: [TrendingService, HttpClient, { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
