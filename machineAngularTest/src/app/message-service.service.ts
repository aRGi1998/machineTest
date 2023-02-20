import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class MessageServiceService {
  subject = new Subject()
  registerData:any
  constructor() { }
  send(data:any){
    let storedData:any = this.addData();
    storedData.push(data)
    localStorage.setItem('registerInfo', JSON.stringify(storedData))
    let registerInfo: any = localStorage.getItem('registerInfo')
    this.registerData = JSON.parse(registerInfo)
    this.subject.next(this.registerData )
  }
  addData(){
    let registerInfo: any = localStorage.getItem('registerInfo')
    this.registerData = JSON.parse(registerInfo)
    return this.registerData
  }

  get(){
    return this.subject.asObservable()
  }
}
