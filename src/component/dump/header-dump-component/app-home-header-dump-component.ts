import {
	ChangeDetectionStrategy,
	Component,
	Input,
	ViewEncapsulation,
} from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
	selector: 'app-home-header-dump-component',
	standalone: true,
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	templateUrl: './app-home-header-dump-component.html',
	imports: [NgStyle],
})
export class AppHomeHeaderDumpComponent {
	@Input({ required: true })
	shopProperties!: {
		name: string;
		status: string;
		opensAt: string;
		address: string;
	};
}
