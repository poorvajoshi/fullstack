import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Group } from '../model/group';
import { Observable} from 'rxjs/observable';

@Injectable()
export class GroupService {

  private groupUrl: string;
 
  constructor(private http: HttpClient) {
    this.groupUrl = 'http://localhost:8080/groups';
  }

  public findAll(): Observable<Group[]> {
    return this.http.get<Group[]>(this.groupUrl);
  }

  public getGroup(id: number): Observable<Group> {
    const url = `${this.groupUrl}/${id}`;
    let grp = this.http.get<Group>(url);
    console.log(grp);
    return grp;
  }

}
