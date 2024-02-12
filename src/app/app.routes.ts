import { Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {AboutComponent} from "./pages/about/about.component";

export const routes: Routes = [
  // first page show
  {path:'login' , component: LoginComponent},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
