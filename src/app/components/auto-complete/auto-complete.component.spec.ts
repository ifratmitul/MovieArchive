import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoCompleteComponent } from './auto-complete.component';
import { MovieService } from 'src/app/movie/movie.service';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AutoCompleteComponent', () => {
  let component: AutoCompleteComponent;
  let fixture: ComponentFixture<AutoCompleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ AutoCompleteComponent, HttpClientModule, BrowserAnimationsModule],
      providers: [MovieService, HttpClient, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoCompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
