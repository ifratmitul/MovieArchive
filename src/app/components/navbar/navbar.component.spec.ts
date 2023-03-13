// import { ComponentFixture, TestBed } from '@angular/core/testing';

// import { NavbarComponent } from './navbar.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { ThemeService } from 'src/app/core/services/theme.service';
// import { ActivatedRoute, RouterModule } from '@angular/router';

// describe('NavbarComponent', () => {
//   let component: NavbarComponent;
//   let fixture: ComponentFixture<NavbarComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       imports: [ NavbarComponent, HttpClientTestingModule, RouterModule],
//       providers: [ThemeService, ActivatedRoute]

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
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ThemeService } from 'src/app/core/services/theme.service';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule,NavbarComponent ],
      // declarations: [ NavbarComponent ],
      providers: [
        ThemeService,
        {
          provide: ActivatedRoute,
          useValue: {
            snapshot: { data: {} },
            queryParams: of({}),
            paramMap: of({})
          }
        }
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
