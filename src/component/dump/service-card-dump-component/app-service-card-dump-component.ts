import { NgFor } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-service-card-dump-component',
  standalone: true,
  templateUrl: './app-service-card-dump-component.html',
  styleUrls: ['./app-service-card-dump-component.css'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgFor],

})
export class AppServiceCardDumpComponent {

  @Input({ required: true})
  properties!: {
    src?: string;
    title: string;
    price: string;
    duration: string;
  }
}
