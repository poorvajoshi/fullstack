import { Component, Input } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'faisal',
  templateUrl: './faisal.component.html',
  styleUrls: ['./faisal.component.css']
})
export class FaisalComponent  {
  @Input() user: User;
}
