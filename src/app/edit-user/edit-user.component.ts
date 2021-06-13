import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  edlstUsers:any=[]
  msg:string=''
  id:any=''
  eduser_info:any={
    firstname:'',lastname:'',email:'',phone:'',
  }
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.edlstUsers = JSON.parse(localStorage.getItem('userlist'))
    console.log(this.route.snapshot.params)
    this.id=this.route.snapshot.params.id
    console.log(this.id)
  }
  
editUser(){
  console.log('eduser_info',this.eduser_info)
  if(this.eduser_info){
    //this.edlstUsers.push(this.eduser_info)
    //console.log('lstUsers',this.edlstUsers)
    this.edlstUsers[this.id]=this.eduser_info
    localStorage.setItem('userlist',JSON.stringify(this.edlstUsers))
    this.msg="profile edited successfully go on user detail page to see the changes"
  }

}

}
