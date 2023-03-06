import { Component, OnInit } from '@angular/core';
import { TrendingService } from 'src/app/core/services/trending.service';

@Component({
  selector: 'app-movie-home',
  templateUrl: './movie-home.component.html',
  styleUrls: ['./movie-home.component.scss']
})
export class MovieHomeComponent implements OnInit {


  constructor(private trendingService: TrendingService) {}

  ngOnInit(): void {
    this.trendingService.getTrendingMovieList().subscribe({
      next: (res:any) => {
        console.log(res);
      },
      error: (err:any) => {
        console.log(err);
      }
    })
  }

}
