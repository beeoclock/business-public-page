import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@src/component/adapter/icon/icon.component';

@Component({
  selector: 'app-service-counter-dump-component',
  templateUrl: './app-service-counter-dump-component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [IconComponent]
})
export class AppServiceCounterDumpComponent {
  @Input() count = 0;

  @Output() increment = new EventEmitter<void>();
  @Output() decrement = new EventEmitter<void>();

  incrementCount() {
    this.increment.emit();
  }

  decrementCount() {
    this.decrement.emit();
  }
}
