import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Country } from '../model/countrie';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountrieService {
  baseApiUrl = 'https://restcountries.com/v3.1';
  http = inject(HttpClient);

  getAllCountries(): Observable<Country[]> {
    return this.http.get<Country[]>(`${this.baseApiUrl}/all`);
  }
}
