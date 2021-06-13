import { Component, OnInit } from '@angular/core';
import {lstUsers} from '../lstUsers'
@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  msg:string='';
  lstUsers:any = [] 
  oldlstUsers:any=[]
    user_info:any={
    firstname:'',lastname:'',email:'',phone:'',
  }
  constructor() { }

  ngOnInit(): void {
    this.oldlstUsers = JSON.parse(localStorage.getItem('userlist'))
    console.log(this.oldlstUsers)
  }
  
  
  addUser(){
    this.lstUsers=this.oldlstUsers
  console.log('user_info',this.user_info)
  if(this.user_info){
  this.lstUsers.push(this.user_info)
  console.log('lstUsers',this.lstUsers)
  localStorage.setItem('userlist',JSON.stringify(this.lstUsers))
  this.msg="User Added Successfully";
  this.user_info={
    firstname:'',lastname:'',email:'',phone:'',
  }
}
}


}
