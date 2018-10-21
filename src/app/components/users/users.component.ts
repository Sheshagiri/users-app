import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../models/Users';
import { UserServce } from '../../services/user.service';

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
  data: any;
  user: User = {
    firstName: '',
    lastName: '',
    email: ''
  }
  constructor(private userService: UserServce) { }

  ngOnInit() {
    this.userService.getData().subscribe(data => {
      console.log(data);
    });

    this.userService.getUsers().subscribe(users => {
      this.users = users;
      this.loaded = true;
    });
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
      //this.users.unshift(value)
      this.userService.addUser(value);
      this.form.reset();
    }
  }
}