import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeopleHomeComponent } from './people-home.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { PeopleService } from '../people.service';

describe('PeopleHomeComponent', () => {
  let component: PeopleHomeComponent;
  let fixture: ComponentFixture<PeopleHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeopleHomeComponent ],
      imports: [HttpClientModule],
      providers: [HttpClient, PeopleService]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PeopleHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
