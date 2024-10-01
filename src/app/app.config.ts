import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { withNgxsReduxDevtoolsPlugin } from '@ngxs/devtools-plugin';
import { withNgxsLoggerPlugin } from '@ngxs/logger-plugin';
import { withNgxsStoragePlugin } from '@ngxs/storage-plugin';
import { provideStore } from '@ngxs/store';
import { provideHttpClient } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from "ngx-logger";

export const appConfig: ApplicationConfig = {
	providers: [
		provideZoneChangeDetection({ eventCoalescing: true }),
		provideRouter(routes),
		provideClientHydration(),
		provideStore(
			[],
			withNgxsReduxDevtoolsPlugin(),
			withNgxsLoggerPlugin(),
			withNgxsStoragePlugin({
				keys: []
			})
		),
		importProvidersFrom([
			LoggerModule.forRoot({
				level: NgxLoggerLevel.TRACE,
				serverLogLevel: NgxLoggerLevel.OFF
			  }),
		])
	],
};
