import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OverlayContainer } from '@angular/cdk/overlay';
import { AppComponent } from './app.component';
import { BehaviorSubject, of, take } from 'rxjs';
import { ThemeService } from './core/services/theme.service';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';
import { baseConfig } from './core/config/baseConfig';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  let themeService: ThemeService;
  let overlay: OverlayContainer;
  let overlayElement: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [NgxSpinnerModule, HttpClientTestingModule, NavbarComponent, RouterTestingModule],
      providers: [ThemeService, OverlayContainer]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.componentInstance;
    themeService = TestBed.inject(ThemeService);
    overlay = TestBed.inject(OverlayContainer);
    overlayElement = overlay.getContainerElement();
    fixture.detectChanges();
  });

  afterEach(() => {
    localStorage.removeItem(baseConfig.darkModeToken);
  });

  it('should create the app', () => {
    expect(component).toBeTruthy();
  });

  it('should have title as "MovieArchive"', () => {
    expect(component.title).toBe('MovieArchive');
  });
  
  it('should add darkMode class to overlay element on darkMode true during subscription', () => {
    const spy = spyOn(themeService.$darkModelState, 'pipe').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    themeService.setDarkModeStatus(true);
    fixture.detectChanges();
    expect(overlayElement.classList.contains('darkMode')).toBeTruthy();
  });

  it('should remove darkMode class to overlay element on darkMode false during subscription', () => {
    const spy = spyOn(themeService.$darkModelState, 'pipe').and.callThrough();
    component.ngOnInit();
    fixture.detectChanges();
    themeService.setDarkModeStatus(false);
    fixture.detectChanges();
    expect(overlayElement.classList.contains('darkMode')).toBeFalsy();
  });
});