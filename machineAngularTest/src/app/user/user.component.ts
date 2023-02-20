import { Component } from '@angular/core';
import { MessageServiceService } from '../message-service.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  firstName=""
  lastName=""
  email=""
  phone=""
  company=""
  dob!: Date;
  role=""
  password=""
  confirmPassword=""
  registerData: any
  constructor( private msg : MessageServiceService) {}

  ngOnInit() {}
  inputChange(e:any){
  
  
    if(e.target.checked==true){
        this.role=e.target.value
        console.log(this.role);
    }
    }
    
  register() {
    let x= {
      firstName: this.firstName,
      lastName: this.lastName,
      email: this.email,
      phoneNumber: this.phone,
      company: this.company,
      dob: this.dob,
      role: this.role,
      password: this.password,
      confirmPassword: this.confirmPassword
    }
    // console.log(x,'values')
    // let array: any = []
    // array.push(x)
    this.msg.send(x)
  }
}
