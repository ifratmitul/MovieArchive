import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/core/models/people';
import { PeopleService } from '../people.service';
import { PaginatedApiResponse } from 'src/app/core/models/response';

@Component({
  selector: 'app-people-home',
  templateUrl: './people-home.component.html',
  styleUrls: ['./people-home.component.scss']
})
export class PeopleHomeComponent implements OnInit {
  currentPageNo = 1;

  peopleList: People[] = []

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.loadPeopleList()
  }

  loadPeopleList() {
    this.peopleService.getPeopleList(this.currentPageNo).subscribe({
      next: (res: PaginatedApiResponse<People>) => {
        this.currentPageNo = res.page;
        this.peopleList = [...this.peopleList, ...res.results];
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  loadMore() {
    if (this.peopleList.length) {
      this.currentPageNo++;
      this.loadPeopleList();
    }
  }
}
