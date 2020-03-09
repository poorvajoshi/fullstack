import { Component, Input } from '@angular/core';
import { User } from '../../model/user';

@Component({
  selector: 'torben',
  templateUrl: './torben.component.html',
  styleUrls: ['./torben.component.css']
})
export class TorbenComponent  {
  @Input() user: User;
}
