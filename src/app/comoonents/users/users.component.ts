import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/Users';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: User[]
  loaded: boolean = true;
  showExtended: boolean = true;
  enableAdd: boolean = false;
  showUserForm: boolean = false;
  @ViewChild('userForm') form:any;
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  constructor() { }

  ngOnInit() {
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
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      email: ''
    }
  }

  fireEvent(e) {
    console.log('button clicked.')
    console.log(e.type)
  }

  toggleHide(user: User) {
    console.log('inside toggleHide')
    user.hide = !user.hide;
  }

  onSubmit({value,valid}: {value: User, valid: boolean}) {
    console.log('form submitted.')
    if(!valid){
      console.log('Form is not valid.')
    } else {
      value.isActive = true;
      value.registered = new Date();
      value.hide = false;
      this.users.unshift(value)

      this.form.reset();
    }
  }
}