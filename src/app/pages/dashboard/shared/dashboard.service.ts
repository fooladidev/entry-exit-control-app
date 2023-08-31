import { HttpClient } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { User } from '../../shared/user.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DashboardService {

  constructor(protected http:HttpClient) { }
  get():Observable<User[]>{
    let ty = this.http.get<User[]>(`https://jsonplaceholder.typicode.com/users`);
    return ty ;
  }

}