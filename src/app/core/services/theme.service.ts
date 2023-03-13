import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { baseConfig } from '../config/baseConfig';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean> (this.getLastDarkModeStatus());
  $darkModelState = this.darkMode.asObservable();

  setDarkModeStatus(flag:boolean) {
    this.darkMode.next(flag);
    localStorage.setItem(baseConfig.darkModeToken, JSON.stringify(flag))
  }

  getLastDarkModeStatus() : boolean {
    return !!JSON.parse(localStorage.getItem(baseConfig.darkModeToken)!)
  }
}
