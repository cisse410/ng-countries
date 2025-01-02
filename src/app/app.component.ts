import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { inject } from '@vercel/analytics';

inject();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ng-countries';
}
