import {
	ChangeDetectionStrategy,
	Component,
	ViewEncapsulation,
} from '@angular/core';
import { NgFor } from '@angular/common';
import { AppHomeHeaderDumpComponent } from '@src/component/dump/header-dump-component/app-home-header-dump-component';

@Component({
	selector: 'app-home-header-component',
	standalone: true,
	imports: [NgFor, AppHomeHeaderDumpComponent],
	template: `<app-home-header-dump-component *ngFor="let shopProperty of shopProperties" [shopProperties]="shopProperty" />`,
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppHomeHeaderComponent {
	public readonly shopProperties: {
    name: string;
    status: string;
    opensAt: string;
    address: string;
	}[] = [
		{
      name: 'Barbershop Brooklyn',
      status: 'Closed',
      opensAt: '9:00am',
      address: 'Sankt Mathias Gade, 72, Viborg, Danmark, 8800',
		},
	];
}
