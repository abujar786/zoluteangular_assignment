import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
 newlstUsers:any=[]
  constructor() { }

  ngOnInit(): void {
    this.newlstUsers = JSON.parse(localStorage.getItem('userlist'))
  }
deleteUser(index){
  if(index){
    console.log(index)
    this.newlstUsers.splice(index)
    localStorage.setItem('userlist',JSON.stringify(this.newlstUsers))
    }
  }


}
