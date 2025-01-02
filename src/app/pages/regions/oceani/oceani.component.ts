import { Component, inject } from '@angular/core';
import { CardCountrieComponent } from '../../../components/card-countrie/card-countrie.component';
import { Country } from '../../../model/countrie';
import { CountrieService } from '../../../services/countrie.service';

@Component({
  selector: 'app-oceani',
  standalone: true,
  imports: [CardCountrieComponent],
  templateUrl: './oceani.component.html',
  styleUrl: './oceani.component.css',
})
export class OceaniComponent {
  countrieService = inject(CountrieService);

  countries: Country[] = [];

  ngOnInit() {
    this.getCountryByRegigon('oceani');
  }

  getCountryByRegigon(region: string) {
    this.countrieService.getAllCountriesByRegigon(region).subscribe((data) => {
      this.countries = data;
    });
  }
}
