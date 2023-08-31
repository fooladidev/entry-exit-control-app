import { Component, OnInit } from '@angular/core';
import { DashboardService } from './shared/dashboard.service';
import { User } from '../shared/user.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  users:User[]=[];  
  constructor(protected dashboardService:DashboardService){
  }
  ngOnInit(): void {
    let vv = this.dashboardService.get();
    vv.subscribe(res=>{
      this.users=res ;
      console.log(res)
    })

  }

}
