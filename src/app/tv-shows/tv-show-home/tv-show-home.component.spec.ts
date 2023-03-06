import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowHomeComponent } from './tv-show-home.component';

describe('TvShowHomeComponent', () => {
  let component: TvShowHomeComponent;
  let fixture: ComponentFixture<TvShowHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvShowHomeComponent ]
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
