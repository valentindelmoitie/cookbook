import { ApplicationConfig } from '@angular/core';
import { ActivatedRoute, provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { CookbookService } from './services/api/cookbook/cookbook.service';
import { HttpClient, HttpClientModule, HttpHandler, provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient()]
};
