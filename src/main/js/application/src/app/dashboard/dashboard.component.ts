import { Component, OnInit } from '@angular/core';
import { Group } from '../model/group';
import { GroupService } from '../service/group.service';


@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	groups: Group[];

	constructor(private groupService: GroupService) {

	}

  ngOnInit() {
    this.groupService.findAll().subscribe(data => {
      this.groups = data;
    });
  }
}