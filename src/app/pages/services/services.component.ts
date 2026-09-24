import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

@Component({
    selector: 'app-services',
    imports: [RouterLink, MatCardModule, MatIconModule, MatButtonModule],
    templateUrl: './services.component.html',
    styleUrl: './services.component.scss'
})
export class ServicesComponent {
  services = [
    {
      icon: 'design_services',
      title: 'Product design',
      text: 'Research, wireframes, and interface design for web applications.',
    },
    {
      icon: 'code',
      title: 'Front-end development',
      text: 'Angular applications built with Material, accessible by default, and easy to hand off.',
    },
    {
      icon: 'insights',
      title: 'Technical review',
      text: 'An outside look at your existing product\u2019s architecture, performance, and accessibility.',
    },
    {
      icon: 'support_agent',
      title: 'Ongoing support',
      text: 'Maintenance and small feature work after launch, billed by the month.',
    },
  ];
}
