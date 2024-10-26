import {
	ChangeDetectionStrategy,
	Component,
	Input,
	ViewEncapsulation,
} from '@angular/core';
import { IconComponent } from '@src/component/adapter/icon/icon.component';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { CounterFormControl } from '@src/component/form-control/counter/counter.form-control';

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
