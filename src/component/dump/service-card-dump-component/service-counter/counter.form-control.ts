import { ChangeDetectionStrategy, Component, EventEmitter, forwardRef, Input, Output } from '@angular/core';
import { IconComponent } from '@src/component/adapter/icon/icon.component';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
	selector: 'app-counter-form-control',
	templateUrl: './counter.form-control.html',
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [IconComponent],
	providers: [
		{
			provide: NG_VALUE_ACCESSOR,
			useExisting: forwardRef(() => CounterFormControl),
			multi: true,
		},
	],
})
export class CounterFormControl implements ControlValueAccessor {

  protected counter = 0;

  private onChange!: (value: number) => void;
  private onTouched!: () => void;

	writeValue(value: number): void {
		console.log({ value });
	}
  public registerOnChange(fn: (value: number) => number): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: () => void): void {
    this.onTouched = fn;
  }
	setDisabledState?(isDisabled: boolean): void {
		console.log({ isDisabled });
	}

	protected incrementCount() {
    this.counter += 1;
    this.onChange(this.counter);
  }

	protected decrementCount() {

    if (this.counter === 0) {
      return;
    }

    this.counter -= 1;
    this.onChange(this.counter);
  }
}
