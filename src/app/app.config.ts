import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {LoginService} from "./services/login.service";

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes) , LoginService]
};
