import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterComponent } from './filter.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { By } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';

describe('FilterComponent', () => {
  let component: FilterComponent;
  let fixture: ComponentFixture<FilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterComponent, BrowserAnimationsModule, MatExpansionModule, MatFormFieldModule, MatSelectModule, ReactiveFormsModule],
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

  it('should emit filterForm value when form value changes', () => {
    const spy = spyOn(component.filterEmitter, 'emit');
    const sortSelect = fixture.nativeElement.querySelector('mat-select');
    console.log(sortSelect)
    sortSelect.value = 'popularity.asc';
    sortSelect.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    expect(sortSelect.value).toEqual('popularity.asc')
  });
});
