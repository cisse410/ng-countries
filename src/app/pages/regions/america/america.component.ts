import { Component, inject } from '@angular/core';
import { CardCountrieComponent } from '../../../components/card-countrie/card-countrie.component';
import { Country } from '../../../model/countrie';
import { CountrieService } from '../../../services/countrie.service';

@Component({
  selector: 'app-america',
  standalone: true,
  imports: [CardCountrieComponent],
  templateUrl: './america.component.html',
  styleUrl: './america.component.css',
})
export class AmericaComponent {
  countrieService = inject(CountrieService);

  countries: Country[] = [];

  ngOnInit() {
    this.getCountryByRegigon('america');
  }

  getCountryByRegigon(region: string) {
    this.countrieService.getAllCountriesByRegigon(region).subscribe((data) => {
      this.countries = data;
    });
  }
}
