import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from "@angular/core";
import { NgIconComponent, provideIcons, provideNgIconsConfig } from '@ng-icons/core';
import { bootstrapDashCircle, bootstrapPlusCircle } from '@ng-icons/bootstrap-icons';

const bootstrapIcons = {
  bootstrapPlusCircle,
  bootstrapDashCircle
};

export type IconNameType =
  keyof typeof bootstrapIcons;

@Component({
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  selector: 'app-icon',
  template: `
		<ng-icon [name]="name"/>
	`,
  host: {
    class: 'contents'
  },
  imports: [
    NgIconComponent
  ],

  viewProviders: [
    provideIcons({
      ...bootstrapIcons,
    }),
    provideNgIconsConfig({
      size: '2em',
    }),
  ],

})
export class IconComponent {

  @Input({required: true})
  public name!: IconNameType;

}
