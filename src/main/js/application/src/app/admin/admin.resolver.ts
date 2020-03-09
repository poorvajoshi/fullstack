import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/user';
import { UserService } from '../service/user.service';


@Injectable()
export class AdminResolver implements Resolve<User> {
  constructor(private backend: UserService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any>|Promise<any>|any {
    return this.backend.getUser(route.params.id);
  }
}