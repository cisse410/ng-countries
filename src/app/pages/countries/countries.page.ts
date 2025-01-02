import { AsyncPipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CardCountrieComponent } from '../../components/card-countrie/card-countrie.component';
import { CountrieService } from '../../services/countrie.service';

@Component({
  selector: 'app-countries',
  standalone: true,
  imports: [AsyncPipe, CardCountrieComponent],
  templateUrl: './countries.page.html',
  styleUrl: './countries.page.css',
})
export class CountriesPage {
  countrieService = inject(CountrieService);

  countries$ = this.countrieService.getAllCountries();
}
