import { Component, OnInit } from '@angular/core';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  user:User[]; 

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    const userInput:string = "fish";
    this.userService.getIsics(userInput).subscribe(users => {
      this.user = users.DATA;
    })

  }

}
