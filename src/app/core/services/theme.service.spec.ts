import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ThemeService } from './theme.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { baseConfig } from '../config/baseConfig';

describe('ThemeService', () => {
  let service: ThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule],
      providers: [ThemeService, HttpClient],
    });
    service = TestBed.inject(ThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getLastDarkModeStatus', () => {
    it('should return a boolean value', () => {
      const result = service.getLastDarkModeStatus();
      expect(typeof result).toBe('boolean');
    });
  });

  describe('setDarkModeStatus', () => {
    it('should update the value of $darkModelState', () => {
      let initialValue = false;
      service.$darkModelState.subscribe((value: boolean) => {
        initialValue = value
      })
      const newValue = !initialValue;
      service.setDarkModeStatus(newValue);
      let updatedValue = false
      service.$darkModelState.subscribe((value: boolean) => {
        updatedValue = value
      })
      expect(updatedValue).toEqual(newValue);
    });

    it('should update the value of the local storage', () => {
      spyOn(localStorage, 'setItem');
      const newValue = true;
      service.setDarkModeStatus(newValue);
      expect(localStorage.setItem).toHaveBeenCalledWith(baseConfig.darkModeToken, JSON.stringify(newValue));
    });
  });
});
