import { DecimalPipe } from '@angular/common';
import { Component, input } from '@angular/core';
import { Country } from '../../model/countrie';

@Component({
  selector: 'app-card-countrie',
  standalone: true,
  imports: [DecimalPipe],
  templateUrl: './card-countrie.component.html',
  styleUrl: './card-countrie.component.css',
})
export class CardCountrieComponent {
  country = input.required<Country>();
}
