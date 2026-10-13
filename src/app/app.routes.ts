import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent, title: 'JustOneAG — Product design & engineering' },
  { path: 'about', component: AboutComponent, title: 'About — JustOneAG' },
  { path: 'services', component: ServicesComponent, title: 'Services — JustOneAG' },
  { path: 'contact', component: ContactComponent, title: 'Contact — JustOneAG' },
  { path: '**', redirectTo: '' },
];
