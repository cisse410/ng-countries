import { Component, inject } from '@angular/core';
import { CardCountrieComponent } from '../../../components/card-countrie/card-countrie.component';
import { CountrieService } from '../../../services/countrie.service';
import { Country } from '../../../model/countrie';

@Component({
  selector: 'app-europe',
  standalone: true,
  imports: [CardCountrieComponent],
  templateUrl: './europe.component.html',
  styleUrl: './europe.component.css',
})
export class EuropeComponent {
  countrieService = inject(CountrieService);

  countries: Country[] = [];

  ngOnInit() {
    this.getCountryByRegigon('europ');
  }

  getCountryByRegigon(region: string) {
    this.countrieService.getAllCountriesByRegigon(region).subscribe((data) => {
      this.countries = data;
    });
  }
}
