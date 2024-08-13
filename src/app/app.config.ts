import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideEffects } from '@ngrx/effects';
import { ProductEffects } from './store/effects/product.effects';
import { provideStore } from '@ngrx/store';
import { productReducer } from './store/reducers/product.reducer';
import { provideHttpClient } from '@angular/common/http';
import {ReactiveFormsModule } from '@angular/forms';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ product: productReducer }),
    provideEffects([ProductEffects]),
    provideHttpClient(),
    provideClientHydration(),
    ReactiveFormsModule
  ],
};
