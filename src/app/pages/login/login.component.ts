import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";

import {AngularToastifyModule, ToastService} from "angular-toastify";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [AngularToastifyModule],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  constructor(private router : Router , private _toastService : ToastService  ) {
  }
  ngOnInit() {

  }
  onUserLogging(e : Event){
    e.preventDefault();
    this.router.navigate(['/home']);
    this._toastService.success("welcome");
  }
}
