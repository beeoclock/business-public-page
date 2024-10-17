import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { environment } from '@environments/environment';
import { AppServiceCardCombinedComponent } from '@src/component/combined/service-card-combined-component/app-service-card-combined-component';
import { AppHomeHeaderComponent } from '@src/component/combined/header-component/app-home-header-component';
import { AppFooterComponent } from '@src/component/combined/footer-component/app-footer-component';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [
		RouterOutlet,
		AppServiceCardCombinedComponent,
		AppHomeHeaderComponent,
		AppFooterComponent,
	],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
	title = 'business-public-page';

	public ngOnInit(): void {
		console.log(environment);
	}
}
