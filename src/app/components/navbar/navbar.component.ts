import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { OverlayContainer } from '@angular/cdk/overlay';
import { ThemeService } from 'src/app/core/services/theme.service';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatSlideToggleModule, ReactiveFormsModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  toggleControl = new FormControl(this.themeService.getLastDarkModeStatus());

  constructor(private themeService: ThemeService) { }

  ngOnInit(): void {
    this.toggleControl.valueChanges.subscribe((darkMode: any) => {
      this.themeService.setDarkModeStatus(darkMode);
    });
  }
}
