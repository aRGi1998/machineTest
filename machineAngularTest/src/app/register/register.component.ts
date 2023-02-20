import { Component } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  userList: any;
  firstName=""
  lastName=""
  email=""
  phone=""
  company=""
  dob!: Date;
  userListsingleDetail: any=[]
 
//  userList = [
//     { id:1, firstName: 'Akhil', lastName:'Kumar', email: 'akhil@gmail.com', phone: 9959479459, company: 'BuzzBoard', dob: '14/03/1991'},
//     { id:2, firstName: 'Rahul', lastName:'Dev', email: 'rahul@gmail.com', phone: 8923193993, company: 'Infosys', dob: '09/07/1990'},
//     { id:3, firstName: 'Sam', lastName:'Kumar', email:'sam@gmail.com', phone: 9703037744, company: 'Cognizant', dob: '27/06/1989'},
//   ];
  constructor(private msg: MessageServiceService) {}
 ngOnInit() {
  let registerInfo: any = localStorage.getItem('registerInfo')
  let registerData = JSON.parse(registerInfo)
  this.userList =registerData
  this.msg.get().subscribe((data:any)=>{
    this.userList = data
    console.log(this.userList,"&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&")
  })
 }
  editUser(name:any) {
    this.userListsingleDetail= this.userList.find((d:any)=>d.firstName==name)
    console.log(this.userListsingleDetail); 
  }

  remove(id: number) {
    this.userList.splice(id,1)
}
updateUser(){
  let x= {
    firstName: this.firstName,
    lastName: this.lastName,
    email: this.email,
    phoneNumber: this.phone,
    company: this.company,
    dob: this.dob,
  }

  this.msg.send(x)
}
}
