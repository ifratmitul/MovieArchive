// import { ComponentFixture, TestBed } from '@angular/core/testing';
// import { ActivatedRoute } from '@angular/router';

// import { PeopleDetailsComponent } from './people-details.component';
// import { HttpClientTestingModule } from '@angular/common/http/testing';
// import { PeopleService } from '../people.service';

// describe('PeopleDetailsComponent', () => {
//   let component: PeopleDetailsComponent;
//   let fixture: ComponentFixture<PeopleDetailsComponent>;

//   beforeEach(async () => {
//     await TestBed.configureTestingModule({
//       declarations: [ PeopleDetailsComponent ],
//       imports: [HttpClientTestingModule],
//       providers: [ 
//         PeopleService,
//         {
//           provide: ActivatedRoute,
//           useValue: {
//             snapshot: {
//               paramMap: {
//                 get: () => '1' // This can be any ID value that you want to test with
//               }
//             }
//           }
//         }
//       ]
//     })
//     .compileComponents();
//   });

//   beforeEach(() => {
//     fixture = TestBed.createComponent(PeopleDetailsComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     expect(component).toBeTruthy();
//   });
// });
