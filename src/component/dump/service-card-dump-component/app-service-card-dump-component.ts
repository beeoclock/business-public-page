import {
	ChangeDetectionStrategy,
	Component,
	Input,
	ViewEncapsulation,
} from '@angular/core';
import { IconComponent } from '@src/component/adapter/icon/icon.component';
import { CounterFormControl } from '@src/component/dump/service-card-dump-component/service-counter/counter.form-control';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
	selector: 'app-service-card-dump-component',
	standalone: true,
	templateUrl: './app-service-card-dump-component.html',
	encapsulation: ViewEncapsulation.None,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [IconComponent, CounterFormControl, ReactiveFormsModule],
})
export class AppServiceCardDumpComponent {
	@Input({ required: true })
	properties!: {
		src?: string;
		title: string;
		price: string;
		duration: string;
	};

	protected readonly counterFormControl = new FormControl(0, {
		nonNullable: true,
	});
}
