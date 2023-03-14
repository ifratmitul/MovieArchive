// // import { ComponentFixture, TestBed } from '@angular/core/testing';

// // import { NavbarComponent } from './navbar.component';
// // import { HttpClientTestingModule } from '@angular/common/http/testing';
// // import { ThemeService } from 'src/app/core/services/theme.service';
// // import { ActivatedRoute, RouterModule } from '@angular/router';

// // describe('NavbarComponent', () => {
// //   let component: NavbarComponent;
// //   let fixture: ComponentFixture<NavbarComponent>;

// //   beforeEach(async () => {
// //     await TestBed.configureTestingModule({
// //       imports: [ NavbarComponent, HttpClientTestingModule, RouterModule],
// //       providers: [ThemeService, ActivatedRoute]

// //     })
// //     .compileComponents();

// //     fixture = TestBed.createComponent(NavbarComponent);
// //     component = fixture.componentInstance;
// //     fixture.detectChanges();
// //   });

// //   it('should create', () => {
// //     expect(component).toBeTruthy();
// //   });
// // });

// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ThemeService } from 'src/app/core/services/theme.service';
// import { ActivatedRoute } from '@angular/router';
// import { of } from 'rxjs';

// import { NavbarComponent } from './navbar.component';

// describe('NavbarComponent', () => {
//   let component: NavbarComponent;
//   let fixture: ComponentFixture<NavbarComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ HttpClientTestingModule,NavbarComponent ],
//       // declarations: [ NavbarComponent ],
//       providers: [
//         ThemeService,
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             snapshot: { data: {} },
//             queryParams: of({}),
//             paramMap: of({})
//           }
//         }
//       ]
//     })
//     .compileComponents();

//     fixture = TestBed.createComponent(NavbarComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });


import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NavbarComponent } from './navbar.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RouterTestingModule } from '@angular/router/testing';
import { ThemeService } from 'src/app/core/services/theme.service';
import { FormControl } from '@angular/forms';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let themeServiceSpy: ThemeService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        MatToolbarModule,
        MatSlideToggleModule,
        RouterTestingModule,
        NavbarComponent
      ],
      providers: [
        ThemeService
      ]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    themeServiceSpy = TestBed.inject(ThemeService)

    const spy = spyOn(themeServiceSpy, 'getLastDarkModeStatus')
    spy.and.returnValue(false);
  });


  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set dark mode status to false by default', () => {
    component.ngOnInit()
    expect(component.toggleControl.value).not.toBeUndefined();
    expect(component.toggleControl.value).not.toBeNull();
  });

  it('should call setDarkModeStatus() when toggleControl value changes', () => {
    const spy = spyOn(themeServiceSpy, 'setDarkModeStatus')

    component.toggleControl.setValue(true);
    expect(spy).toHaveBeenCalledWith(true);
  });
});
