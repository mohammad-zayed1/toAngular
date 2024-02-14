import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";

import {HttpClient, HttpClientModule} from "@angular/common/http";
import {FeaturesComponent} from "./features/features.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HttpClientModule,
    FeaturesComponent
  ],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit{
   data = [];
  constructor( private http:HttpClient ) {
  }
  ngOnInit() {
    this.getData();
  }
  getData(){
    this.http.get<any>('https://run.mocky.io/v3/203e2633-5885-4bbc-b260-c81c75506808').subscribe((res) => {
      this.data  = res.data;
      console.log(res.data);
    });
  }
}
