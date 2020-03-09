import { Component, OnInit, Compiler, Injector, NgModuleRef, ViewContainerRef, ViewChild, NgModule, AfterViewInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../service/user.service';
import { CustomInput } from './custom.input';
import { Type } from '@angular/core';
import { User } from '../model/user';

const componentOptions = Object.assign(
	{},
	{ template: this.load([
			'./faisal.component.html',
			'./samad.component.html']
		)
	},
	{ selector: 'child-component' },
	{ styleUrls: ['./admin.component.css'] }
);

@Component(componentOptions)
export class AdminComponent implements OnInit, AfterViewInit {




	custom: CustomInput;
	user: User;
	@ViewChild('dynamicTemplate', { read: ViewContainerRef }) dynamicTemplate;

	constructor(
		private route: ActivatedRoute,
		private userService: UserService,
		private _compiler: Compiler,
		private _injector: Injector,
		private _m: NgModuleRef<any>,

	) { }

	ngOnInit(): void {
		this.getUser();
	}

	ngAfterViewInit() {
		let myTemplateUrl = './faisal/faisal.component.html';
		const tmpCmp = Component({
			moduleId: module.id, templateUrl: myTemplateUrl

		})(class { });
		const tmpModule = NgModule({ declarations: [tmpCmp] })(class {
		});

		this._compiler.compileModuleAndAllComponentsAsync(tmpModule)
			.then((factories) => {
				const f = factories.componentFactories[0];
				const cmpRef = f.create(this._injector, [], null, this._m);
				cmpRef.instance.name = 'dynamic';
				this.dynamicTemplate.insert(cmpRef.hostView);
			});
	}

	getUser(): void {
		const id = +this.route.snapshot.paramMap.get('id');
		this.userService.getUser(id)
			.subscribe(user => {
				var unknownstring = user.firstName + 'Component' as unknown;
				let customcomponent = unknownstring as Type<any>;
				this.custom = new CustomInput(customcomponent, user);
			});
	}
	public load(urls: string[]) {

		urls.forEach(element => {
			if (element.includes(this.user.firstName)) {
				return element;
			}
		});

	}
}