import {Component, OnInit} from '@angular/core';
import {NavbarComponent} from "../../components/navbar/navbar.component";
import {FooterComponent} from "../../components/footer/footer.component";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {TeamComponent} from "./team/team.component";

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HttpClientModule,
    TeamComponent
  ],
  templateUrl: './about.component.html'
})
export class AboutComponent implements OnInit{
  data : any[]  = [];
  constructor(private http:HttpClient) {
  }
  ngOnInit() {
    this.getData();
  }
  getData(){
    this.http.get<any>('https://run.mocky.io/v3/357e5a6b-3399-4a94-8417-47f0bdd29328').subscribe((res) => {
      this.data  = res.data;
      console.log(res.data);
    });
  }
}
