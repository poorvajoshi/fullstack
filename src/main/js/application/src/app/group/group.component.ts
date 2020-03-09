import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { GroupService } from '../service/group.service';
import { User } from '../model/user';


@Component({
	selector: 'app-group',
	templateUrl: './group.component.html',
	styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {

 users: User[];

  constructor(
    private route: ActivatedRoute,
    private groupService: GroupService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getGroup();
  }

  getGroup(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    let fal = this.groupService.getGroup(id)
      .subscribe(grp => this.users = grp.users);
      console.log(fal);
  }

  goBack(): void {
    this.location.back();
  }
}