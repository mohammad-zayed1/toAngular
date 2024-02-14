import {Component, EventEmitter, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { initFlowbite } from 'flowbite';
import {NavbarComponent} from "./components/navbar/navbar.component";
import {FooterComponent} from "./components/footer/footer.component";
import {NgIf} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent, NgIf , HttpClientModule],
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  title = 'changedToAngular';
  isLogin : boolean = false ;
  constructor() {
  }
  ngOnInit() {
    initFlowbite();

  }
}
