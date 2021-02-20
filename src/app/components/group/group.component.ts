import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/Group';
import { GroupService } from '../../services/group.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  group:Group[]; 

  constructor(private groupService:GroupService) { }

  ngOnInit(): void {
    const userInput:string = "fish";
    this.groupService.getIsics(userInput).subscribe(groups => {
      this.group = groups.DATA;
    })
  }

}
