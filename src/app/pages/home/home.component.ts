import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';

@Component({
    selector: 'app-home',
    imports: [RouterLink, MatButtonModule, MatIconModule, MatCardModule],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent {
  features = [
    {
      icon: 'design_services',
      title: 'Considered design',
      description:
        'Every screen starts as a sketch, not a template. We design for the people who will actually use the product.',
    },
    {
      icon: 'terminal',
      title: 'Real engineering',
      description:
        'We build in Angular and TypeScript, write tests, and hand off code your own team can maintain without us.',
    },
    {
      icon: 'devices',
      title: 'Every screen size',
      description:
        'Layouts are checked on phones and tablets from the first draft, not patched in after the fact.',
    },
    {
      icon: 'handshake',
      title: 'Direct collaboration',
      description:
        'You work with the people actually building your product — no account managers standing in between.',
    },
  ];
}
