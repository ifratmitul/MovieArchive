import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from '../../services/theme.service';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  toggleControl = new FormControl(this.themeService.getLastDarkModeStatus());

  constructor(private breakpointObserver: BreakpointObserver, private overlay: OverlayContainer, private themeService: ThemeService) { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode: any) => {
      this.themeService.setDarkModeStatus(darkMode);
    });
  }

}
