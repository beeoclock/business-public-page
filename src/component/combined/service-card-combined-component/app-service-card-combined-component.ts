import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';
import { NgFor } from '@angular/common';
import { AppServiceCardDumpComponent } from '@src/component/dump/service-card-dump-component/app-service-card-dump-component';
import { CounterFormControl } from '@src/component/dump/service-card-dump-component/service-counter/counter.form-control';

@Component({
  selector: 'app-service-card-combined-component',
  standalone: true,
  imports: [NgFor, AppServiceCardDumpComponent, CounterFormControl],
  template: `
    <div *ngFor="let property of properties">
      <app-service-card-dump-component [properties]="property"></app-service-card-dump-component>
    </div>
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppServiceCardCombinedComponent {
  public readonly properties: {
    src?: string;
    title: string;
    price: string;
    duration: string;
  }[] = [
    {
      src: 'https://images.unsplash.com/photo-1587614203976-365c74645e83?q=80&w=480&h=600&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Haircut',
      price: '80 PLN',
      duration: '30 min',
    },
    {
      src: 'http://localhost:4201/assets/photo1.png',
      title: 'Shaving',
      price: '45 PLN',
      duration: '20 min',
    },
    {
      src: 'https://beeoclock.biz/assets/examples/business-2.jpg',
      title: 'Coloring',
      price: '400 PLN',
      duration: '2 godz 30 min',
    },
    {
      src: 'http://localhost:4201/assets/src.PNG',
      title: 'Keratine Straightening of Hair',
      price: '80 PLN',
      duration: '30 min',
    },
  ];
}
