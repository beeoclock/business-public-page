import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './app-footer-component.html',
  standalone: true,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppFooterComponent {
  public readonly currentYear: number = new Date().getFullYear();
}
