import { Component, Input, OnInit, ViewChild, ComponentFactoryResolver, OnDestroy } from '@angular/core';

import { CustomInput } from './custom.input';
import { CustomComponent } from './custom.component';
import { CustomDirective } from './custom.directive';

@Component({
  selector: 'app-user',
  template: `
                <ng-template host></ng-template>
            `
})
export class UserComponent implements OnInit {
  @Input() custom: CustomInput;
  @ViewChild(CustomDirective, { static: true }) host: CustomDirective;
  interval: any;
  constructor(private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit() {
    this.loadComponent();
  }

  loadComponent() {

    if (this.custom == null) {
      
    } else {
      
   console.log(this.custom.component)

    const componentFactory = this.componentFactoryResolver.resolveComponentFactory(this.custom.component);

    const viewContainerRef = this.host.viewContainerRef;
    viewContainerRef.clear();

    const componentRef = viewContainerRef.createComponent(componentFactory);
    (<CustomComponent>componentRef.instance).data = this.custom.data;
     }
  }

}
