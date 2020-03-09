import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { User } from '../model/user';


@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html',
	styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

	user: User;

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
	) { }

	ngOnInit(): void {
		this.getUser();
	}


	getUser(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.userService.getUser(id)
			.subscribe(user => this.user = user);
	}

}