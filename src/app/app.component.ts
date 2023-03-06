import { Component, HostBinding, OnInit } from '@angular/core';
import { ThemeService } from './core/services/theme.service';
import { OverlayContainer } from '@angular/cdk/overlay';
import { TrendingService } from './core/services/trending.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @HostBinding('class') className = '';

  constructor(private themeSevice: ThemeService, private overlay: OverlayContainer, private trendingService:TrendingService) { }
  ngOnInit(): void {
    this.themeSevice.$darkModelState.subscribe({
      next: (darkMode: boolean) => {
        const darkClassName = 'darkMode';
        this.className = darkMode ? darkClassName : '';
        if (darkMode) {
          this.overlay.getContainerElement().classList.add(darkClassName);
        } else {
          this.overlay.getContainerElement().classList.remove(darkClassName);
        }
      }
    })

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
