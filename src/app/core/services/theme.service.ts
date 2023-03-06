import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean> (this.getLastDarkModeStatus());
  $darkModelState = this.darkMode.asObservable();
  constructor() { }

  setDarkModeStatus(flag:boolean) {
    this.darkMode.next(flag);
    localStorage.setItem("darkMode", JSON.stringify(flag))
  }

  getLastDarkModeStatus() : boolean {
    return JSON.parse(localStorage.getItem("darkMode")!)
  }
}
