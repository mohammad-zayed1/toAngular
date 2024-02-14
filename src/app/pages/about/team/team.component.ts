import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [],
  templateUrl: './team.component.html'
})
export class TeamComponent {
 @Input() person :any;
}
