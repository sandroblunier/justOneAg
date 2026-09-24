import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';

@Component({
    selector: 'app-footer',
    imports: [RouterLink, MatIconModule],
    templateUrl: './footer.component.html',
    changeDetection: ChangeDetectionStrategy.Eager,
    styleUrl: './footer.component.scss'
})
export class FooterComponent {
  year = new Date().getFullYear();
}
