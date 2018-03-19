import { Component, OnInit } from '@angular/core';
import {AdminService} from '../../services/admin/admin.service'

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {
  userData=[]
  constructor(private adminService:AdminService) { }
 
  ngOnInit() {
  	this.getAppUserS()
  }


  getAppUserS() {

    this.adminService.AppUsersList().subscribe(data=>{
        this.userData=data.data
     },err=>{
        console.log(err);
    })
}
}
