import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'

import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user: User;
  loggedIn: boolean = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {

  }

  newUserPage(){
    this.loggedIn = false;
    this.userService.reg(this.loggedIn);
    this.router.navigate([`/LOGIN`]);
  }

  userLoginPage(){
    this.loggedIn = true;
    this.router.navigate([`/LOGIN`]);

  }


  userLogin(username, password) {
    this.loggedIn = true;
    this.userService.reg(this.loggedIn);
    this.userService.getUser(username,password).subscribe(det => {
      this.user = det.DATA;
      console.log(this.user);
    });

    if(this.user.password==password){
      console.log("in");
      this.router.navigate([``]);
    }else{
      // this.newUserPage();
      console.log("errorrrr");
    }


  }

  newUser(username,password,first_name,last_name,email,phone_number) {
    console.log(username,password, "got cridentials");
    this.userService.sendData(username,password,first_name,last_name,email,phone_number);
    this.userService.sendData(username,password,first_name,last_name,email,phone_number)
    .subscribe((user_cridentials)=>{

    });
  }

  backToDBoard() {
    console.log('back');
    this.router.navigate([``]);
  }

  public onLoginClick() {
    this.router.navigate([``]);
  }


}
