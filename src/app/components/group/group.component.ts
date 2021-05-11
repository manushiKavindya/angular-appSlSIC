import { Component, OnInit } from '@angular/core';
import { Group } from '../../models/Group';
import { Router } from '@angular/router'
import { FiveDService } from 'src/app/services/fived.service';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})
export class GroupComponent implements OnInit {
  title = 'Group Page';
  details: Group;
  sub: any;
  constructor(private fivedService: FiveDService, private router: Router) { }


  ngOnInit(): void {
    console.log('in group');
    this.getPage();

  }

  getPage() {
    console.log('in Page');
    let fid = this.fivedService.getCode();
    console.log('second' + fid);

    this.fivedService.getGroups(fid).subscribe(det => {
      this.details = det.DATA[0];
      this.sub = this.details.sub_list[0];
      console.log(this.sub[0]);
      this.sub.forEach((data =>{
        console.log(data.class_id);
      }))
    });

    console.log('end');
  }

  backToDBoard() {
    console.log('back');

    this.router.navigate([``]);
  }
}
