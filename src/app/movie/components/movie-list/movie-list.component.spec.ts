import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieListComponent } from './movie-list.component';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { MovieService } from '../../movie.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('MovieListComponent', () => {
  let component: MovieListComponent;
  let fixture: ComponentFixture<MovieListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieListComponent ],
      imports: [HttpClientTestingModule, FilterComponent, BrowserAnimationsModule],
      providers: [HttpClient, MovieService, HttpHandler]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MovieListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
