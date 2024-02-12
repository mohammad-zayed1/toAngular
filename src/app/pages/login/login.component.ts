import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../services/login.service";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
  isLogin : any ;

  constructor(private router : Router , private loginService :LoginService) {
  }
  ngOnInit() {
    this.isLogin = localStorage.getItem('isLogin');
  }

  onUserLogging(e : Event){
    e.preventDefault();
    localStorage.setItem('isLogin' , 'true');
    this.loginService.isLogin.subscribe((check)=>{
      this.isLogin.emit(check);
    } );
    this.router.navigate(['/home']);
  }
}
