import { Component, inject } from '@angular/core';
import { Country } from '../../../model/countrie';
import { CountrieService } from '../../../services/countrie.service';
import { CardCountrieComponent } from '../../../components/card-countrie/card-countrie.component';

@Component({
  selector: 'app-asia',
  standalone: true,
  imports: [CardCountrieComponent],
  templateUrl: './asia.component.html',
  styleUrl: './asia.component.css',
})
export class AsiaComponent {
  countrieService = inject(CountrieService);

  countries: Country[] = [];

  ngOnInit() {
    this.getCountryByRegigon('asia');
  }

  getCountryByRegigon(region: string) {
    this.countrieService.getAllCountriesByRegigon(region).subscribe((data) => {
      this.countries = data;
    });
  }
}
