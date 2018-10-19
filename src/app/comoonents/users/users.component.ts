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
    /* address: {
      street: '',
      city: '',
      state: '',
    },
    age: null */
    email: ''
  }
  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'Paul',
        lastName: 'Doe',
        /* age: 30,
        address: {
          street: '5th Cross',
          city: 'Las Vegas',
          state: 'NV'
        }, */
        isActive: true,
        registered: new Date('11/11/2018 08:08:09'),
        hide: true,
        email:'paul@admin.com'
      },
      {
        firstName: 'Tom',
        lastName: 'Marsh',
        /* age: 30,
        address: {
          street: 'Queen\'s st',
          city: 'San Jose',
          state: 'CA'
        }, */
        hide: true,
        email:'tom@tom.com',
        registered: '01/04/2011 01:05:06'
      }, {
        firstName: 'Pete',
        lastName: 'William',
        /* age: 30,
        address: {
          street: '20 east central st',
          city: 'Seatle',
          state: 'WA'
        }, */
        hide: true,
        isActive: true,
        email:'pete@william.com',
        registered: '01/04/2015 01:05:06'
      },
    ];
    /* this.addUser({
      firstName: 'Sam',
      lastName:'Middle',
      age: 42,
      address: {
        street: '1st main',
        city: 'New England',
        state: 'CN'
      },
      registered: new Date('10/10/2013 09:01:05'),
      isActive: true,
      hide: true
    }); */
  }
  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
      lastName: '',
      /* address: {
        street: '',
        city: '',
        state: '',
      },
      age: null, */
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
    //e.preventDefault();
  }
}