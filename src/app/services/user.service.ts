import { Injectable } from '@angular/core';
import { User } from '../models/Users';
import { Observable, of } from 'rxjs';

@Injectable()
export class UserServce {
  users: User[];
  data: Observable<any>;

  constructor() {
    this.users = [
      {
        firstName: 'Paul',
        lastName: 'Doe',
        isActive: true,
        registered: new Date('11/11/2018 08:08:09'),
        hide: true,
        email: 'paul@admin.com'
      },
      {
        firstName: 'Tom',
        lastName: 'Marsh',
        hide: true,
        email: 'tom@tom.com',
        registered: '01/04/2011 01:05:06'
      }, {
        firstName: 'Pete',
        lastName: 'William',
        hide: true,
        isActive: true,
        email: 'pete@william.com',
        registered: '01/04/2015 01:05:06'
      },
    ];
  }

  getData() {
    this.data = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(2);
      }, 2000);
      setTimeout(() => {
        observer.next(3);
      }, 3000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
    });
    return this.data
  }

  getUsers(): Observable<User[]> {
    console.log('fetching users from service.')
    return of(this.users);
  }

  addUser(user: User) {
    this.users.unshift(user)
  }

}
