import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FilterComponent,BrowserAnimationsModule , HttpClientTestingModule, HttpClientModule ],
      providers: []
    })
    .compileComponents();

    fixture = TestBed.createComponent(FilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
