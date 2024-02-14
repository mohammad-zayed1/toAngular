import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [],
  templateUrl: './features.component.html'

})
export class FeaturesComponent {
  @Input() feature : any;
 }
