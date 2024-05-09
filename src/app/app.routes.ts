import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { ExperienceComponent } from './pages/experience/experience.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: { num: 1 }
  },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    data: { num: 2 }
  },
  {
    path: 'experience',
    component: ExperienceComponent,
    data: { num: 3 }
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { num: 4 }
  },
  {
    path: '**', redirectTo: 'home'
  }
];
