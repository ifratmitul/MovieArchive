import { Component, OnInit } from '@angular/core';
import { People } from 'src/app/core/models/people';
import { PeopleService } from '../people.service';

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
    this.loadTvShowList()
  }
  loadTvShowList() {
    this.peopleService.getPeopleList(this.currentPageNo).subscribe({
      next: (res: any) => {
        console.log(res);
        this.currentPageNo = res.page;
        this.peopleList = [...this.peopleList, ...res.results];

      },
      error: (err: any) => {
        console.log(err);

      }
    })
  }

  loadMore() {
    this.currentPageNo++;
    this.loadTvShowList();
  }

}
