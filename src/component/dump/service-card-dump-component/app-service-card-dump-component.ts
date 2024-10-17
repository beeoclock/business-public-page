import {
	ChangeDetectionStrategy,
	Component,
	Input,
	ViewEncapsulation,
} from '@angular/core';

@Component({
	selector: 'app-service-card-dump-component',
	standalone: true,
	templateUrl: './app-service-card-dump-component.html',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
})

export class AppServiceCardDumpComponent {
	@Input({ required: true })
	properties!: {
		src?: string;
		title: string;
		price: string;
		duration: string;
	};
}
