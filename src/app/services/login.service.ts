import {EventEmitter, Output} from "@angular/core";


export class LoginService{
   isLogin = new EventEmitter<boolean>();

//   checkUserLogin (): boolean{
//     this.isLogin = localStorage.getItem('isLogin') == 'true';
//     return this.isLogin;
// }
}
