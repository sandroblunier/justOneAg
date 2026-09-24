import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'Fieldwork — Product design & engineering' },
  { path: 'about', component: AboutComponent, title: 'About — Fieldwork' },
  { path: 'services', component: ServicesComponent, title: 'Services — Fieldwork' },
  { path: 'contact', component: ContactComponent, title: 'Contact — Fieldwork' },
  { path: '**', redirectTo: '' },
];
