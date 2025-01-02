import { Component, inject, OnInit } from '@angular/core';
import { CardCountrieComponent } from '../../../components/card-countrie/card-countrie.component';
import { Country } from '../../../model/countrie';
import { CountrieService } from '../../../services/countrie.service';

@Component({
  selector: 'app-africa',
  standalone: true,
  imports: [CardCountrieComponent],
  templateUrl: './africa.component.html',
  styleUrl: './africa.component.css',
})
export class AfricaComponent {
  countrieService = inject(CountrieService);

  countries: Country[] = [];

  ngOnInit() {
    this.getCountryByRegigon('africa');
  }

  getCountryByRegigon(region: string) {
    this.countrieService.getAllCountriesByRegigon(region).subscribe((data) => {
      this.countries = data;
    });
  }
}
