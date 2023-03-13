import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowHomeComponent } from './tv-show-home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TvShowsService } from '../tv-shows.service';
import { FilterComponent } from 'src/app/components/filter/filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('TvShowHomeComponent', () => {
  let component: TvShowHomeComponent;
  let fixture: ComponentFixture<TvShowHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowHomeComponent ],
      imports: [HttpClientModule, HttpClientTestingModule, FilterComponent, BrowserAnimationsModule],
      providers: [TvShowsService, HttpClient]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TvShowHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
