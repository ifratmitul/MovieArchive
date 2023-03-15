import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

//material imports
import { MatAccordion, MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'

@Component({
  selector: 'app-filter',
  standalone: true,
  imports: [CommonModule, MatExpansionModule, ReactiveFormsModule, MatFormFieldModule, MatSelectModule],
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit {
  @ViewChild(MatAccordion) accordion: MatAccordion | null = null;
  
  @Output() filterEmitter = new EventEmitter<any>()
  filterForm: FormGroup | null = null;

  ngOnInit(): void {
    this.filterForm = new FormGroup({
      sort_by: new FormControl('popularity.desc')
    })
  }
}
