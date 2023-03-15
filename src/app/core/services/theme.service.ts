import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { baseConfig } from '../config/baseConfig';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private darkMode = new BehaviorSubject<boolean>(this.getLastDarkModeStatus());
  public $darkModelState: Observable<boolean> = this.darkMode.asObservable();

  setDarkModeStatus(flag: boolean): void {
    this.darkMode.next(flag);
    localStorage.setItem('darkMode', JSON.stringify(flag));
  }

  getLastDarkModeStatus(): boolean {
    return !!JSON.parse(localStorage.getItem('darkMode') || 'false');
  }
}
