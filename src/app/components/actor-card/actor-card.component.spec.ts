import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ActorCardComponent } from './actor-card.component';
import { People } from 'src/app/core/models/people';
import { Router, RouterModule } from '@angular/router';

describe('ActorCardComponent', () => {
  let component: ActorCardComponent;
  let fixture: ComponentFixture<ActorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, RouterModule, ActorCardComponent]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ActorCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should display actor details', () => {
    const people: People = {
      "adult": false,
      "gender": 2,
      "id": 1253360,
      "known_for_department": "Acting",
      "name": "Pedro Pascal",
      "popularity": 386.967,
      "profile_path": "/nms0d0ExYtiOke82oqr3vOb3smF.jpg"
    };

    component.details = people;
    fixture.detectChanges();

    const name = fixture.nativeElement.querySelector('.name');
    const image = fixture.nativeElement.querySelector('img');

    expect(name.textContent).toContain(people.name);
    expect(image.src).toContain(people.profile_path);
  });

  it('should navigate to actor details on select', () => {
    const router = TestBed.inject(Router);
    spyOn(router, 'navigate');
    const people: People = {
      "adult": false,
      "gender": 2,
      "id": 1253360,
      "known_for_department": "Acting",
      "name": "Pedro Pascal",
      "popularity": 386.967,
      "profile_path": "/nms0d0ExYtiOke82oqr3vOb3smF.jpg"
    };
    component.details = people;
    component.onSelect(people.id);
    expect(router.navigate).toHaveBeenCalledWith(['people', 'details',  people.id]);
  });
});
