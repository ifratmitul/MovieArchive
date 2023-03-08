import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent implements OnInit{
 
  @ViewChild(MatAccordion) accordion: MatAccordion | null =  null;
  @Output() filterEmitter = new EventEmitter<any>()
  filterForm: FormGroup | null = null;


  ngOnInit(): void {
    this.filterForm = new FormGroup({
      sort_by : new FormControl('popularity.desc')
    })
    this.listenToFormValueChange();
  }

  listenToFormValueChange() {
    this.filterForm?.valueChanges.subscribe((res:any) => {
      console.log(res);
      this.filterEmitter.emit(res);
    })
  }


}
