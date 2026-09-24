import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-about',
  imports: [MatCardModule, MatIconModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss',
})
export class AboutComponent {
  values = [
    {
      icon: 'visibility',
      title: 'What we believe',
      text: 'Good software respects the person using it — their time, their attention, and their trust.',
    },
    {
      icon: 'groups',
      title: 'How we\u2019re structured',
      text: 'Four people, no layers of management between you and the work.',
    },
    {
      icon: 'eco',
      title: 'How we choose projects',
      text: 'We take on work we understand well enough to make good judgment calls without checking in on every detail.',
    },
  ];
}
