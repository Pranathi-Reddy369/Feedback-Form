import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor() { }
  users=[
    {name: "Ram", status: "Active"},
    {name: "Sam", status: "Active"},
    {name: "Jam", status: "Active"}
  ]
  addUser(name : string, status: string){
    this.users.push({name : name , status: status})
  
  }
}
