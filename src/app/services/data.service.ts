import { Injectable } from '@angular/core';
import { User } from '../models/Users'

@Injectable()
export class DataService {
  users: User[]

  constructor() { 
    this.users = [
      {
        firstName: 'Paul',
        lastName: 'Doe',
        isActive: true,
        registered: new Date('11/11/2018 08:08:09'),
        hide: true,
        email:'paul@admin.com'
      },
      {
        firstName: 'Tom',
        lastName: 'Marsh',
        hide: true,
        email:'tom@tom.com',
        registered: '01/04/2011 01:05:06'
      }, {
        firstName: 'Pete',
        lastName: 'William',
        hide: true,
        isActive: true,
        email:'pete@william.com',
        registered: '01/04/2015 01:05:06'
      },
    ];
  }

  getUsers(): User[]{
    console.log('fetching users from service.')
    return this.users;
  }

  addUser(user:User){
    this.users.unshift(user)
  }

}
