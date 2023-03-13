import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule, HttpHandler } from '@angular/common/http';
import { ThemeService } from './core/services/theme.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NavbarComponent } from './components/navbar/navbar.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        HttpClientTestingModule, 
        HttpClientModule,
        NgxSpinnerModule,
        NavbarComponent
      ],
      declarations: [
        AppComponent
      ],
      providers: [HttpClient, ThemeService, HttpHandler]
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'MovieArchive'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('MovieArchive');
  });
});
