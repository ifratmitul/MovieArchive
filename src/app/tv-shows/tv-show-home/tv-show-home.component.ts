import { Component, OnInit } from '@angular/core';
import { MoviesDetails } from 'src/app/core/models/movieDetails';
import { TvShowsService } from '../tv-shows.service';
import { showType } from 'src/app/core/common/common.constant';

@Component({
  selector: 'app-tv-show-home',
  templateUrl: './tv-show-home.component.html',
  styleUrls: ['./tv-show-home.component.scss']
})
export class TvShowHomeComponent implements OnInit{
  currentPageNo = 1;
  type =  showType.TVSHOW;
  
  tVseries: MoviesDetails[] = []

  constructor(private tvService:TvShowsService) {}
  ngOnInit(): void {
    this.loadTvShowList()
  }

  loadTvShowList() {
    this.tvService.getAllTvShows(this.currentPageNo).subscribe({
      next: (res:any) => {
        console.log(res);
        this.currentPageNo = res.page;
        this.tVseries = [...this.tVseries, ...res.results];
        
      },
      error: (err:any) => {
        console.log(err);
        
      }
    })
  }

  loadMore() {
    if(this.tVseries.length) {
      this.currentPageNo++;
      this.loadTvShowList();
    }
  }

  onFilterEmitt(event:any) {
    console.log(event);
  }
}
