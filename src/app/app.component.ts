import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import {LoginComponent} from "./pages/login/login.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NgIf} from "@angular/common";
import {LoginService} from "./services/login.service";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LoginComponent, NavbarComponent, FooterComponent, NgIf],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'changedToAngular';
  isLogin: boolean = true;

  constructor(private loginService : LoginService) {
  }
  ngOnInit() {
    initFlowbite();
    // this.isLogin = this.loginService.checkUserLogin();
  }


}
