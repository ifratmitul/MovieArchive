import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute, Router } from '@angular/router';
import { of } from 'rxjs';
import { PeopleService } from '../people.service';

import { PeopleDetailsComponent } from './people-details.component';
import { PeopleDetails } from 'src/app/core/models/people';
import { HttpClientTestingModule } from '@angular/common/http/testing';

describe('PeopleDetailsComponent', () => {
    let component: PeopleDetailsComponent;
    let fixture: ComponentFixture<PeopleDetailsComponent>;
    let peopleServiceSpy: PeopleService;
    let activatedRouteMock: ActivatedRoute;
    let routerSpy: Router;

    const mockPeopleDetails: PeopleDetails =
    {
        adult: false,
        also_known_as: [
            "Jenna Marie Ortega",
            "珍娜·奧特嘉",
            "珍娜·奥尔特加",
            "ジェナ・オルテガ",
            "Дженна Ортега"
        ],
        biography: "Jenna Marie Ortega (born September 27, 2002) is an American actress. She began her career as a child actress, receiving recognition for her role as young Jane on The CW comedy-drama series Jane the Virgin (2014–2019). She had her breakthrough for starring as Harley Diaz on the Disney Channel series Stuck in the Middle (2016–2018), for which she won an Imagen Award. She played Ellie Alves in the second season of the Netflix thriller series You in 2019 and starred in the Netflix family film Yes Day (2021).\n\nOrtega received critical praise for her performance in the teen drama The Fallout (2021), and went on to star in the 2022 slasher films X and Scream, establishing herself as a scream queen. She starred as Wednesday Addams in the Netflix horror comedy series Wednesday (2022), for which she received a nomination for a Golden Globe Award.\n\nDescription above from the Wikipedia article Jenna Ortega, licensed under CC-BY-SA, full list of contributors on Wikipedia.",
        birthday: "2002-09-27",
        deathday: null,
        gender: 1,
        homepage: null,
        id: 974169,
        imdb_id: "nm4911194",
        known_for_department: "Acting",
        name: "Jenna Ortega",
        place_of_birth: "Coachella Valley, Palm Desert, California, USA",
        popularity: 188.371,
        profile_path: "/q1NRzyZQlYkxLY07GO9NVPkQnu8.jpg"
    }


    beforeEach(async () => {
        activatedRouteMock = jasmine.createSpyObj('ActivatedRoute', [], {
            snapshot: { params: { peopleId: mockPeopleDetails.id }, routeConfig: { path: 'people/details/:peopleId' } },
        });

        await TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            declarations: [PeopleDetailsComponent],
            providers: [
                PeopleService,
                Router,
                { provide: ActivatedRoute, useValue: activatedRouteMock },
            ],
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(PeopleDetailsComponent);
        component = fixture.componentInstance;
        peopleServiceSpy = TestBed.inject(PeopleService);
        routerSpy = TestBed.inject(Router);
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should fetch people details on init', () => {
        const spy = spyOn(peopleServiceSpy, 'getDetails')
        spy.and.returnValue(of(mockPeopleDetails));
        component.ngOnInit();
        expect(component.peopleDetails?.name).toEqual(mockPeopleDetails.name);
    });

    it('should redirect to home page if peopleId is not provided', () => {
        activatedRouteMock.snapshot.params['peopleId'] = undefined;
        const spy = spyOn(routerSpy, 'navigateByUrl')
        component.ngOnInit()
        expect(spy).toHaveBeenCalledWith('/');
    });
});
