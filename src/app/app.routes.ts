import { Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AfricaComponent } from './pages/regions/africa/africa.component';
import { AmericaComponent } from './pages/regions/america/america.component';
import { AsiaComponent } from './pages/regions/asia/asia.component';
import { EuropeComponent } from './pages/regions/europe/europe.component';
import { OceaniComponent } from './pages/regions/oceani/oceani.component';
import { ContactComponent } from './components/contact/contact.component';

export const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    title: 'Countries',
  },
  {
    path: '',
    component: MainLayoutComponent,
    title: 'Countries',
    children: [
      {
        path: 'africa',
        component: AfricaComponent,
        title: "Les pays d'Afrique",
      },
      {
        path: 'europe',
        component: EuropeComponent,
        title: "Les pays d'Europe",
      },
      {
        path: 'america',
        component: AmericaComponent,
        title: "Les pays d'Amérique",
      },
      {
        path: 'asia',
        component: AsiaComponent,
        title: "Les pays d'Asie",
      },
      {
        path: 'oceani',
        component: OceaniComponent,
        title: "Les pays d'Océanie",
      },
      {
        path: 'contact',
        component: ContactComponent,
        title: 'A propos de moi',
      },
    ],
  },
];
