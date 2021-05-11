import { Component, OnInit } from '@angular/core';
import { Scn } from '../../models/Scn';
import { Router } from '@angular/router'
import { FiveDService } from 'src/app/services/fived.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  title = 'Division Page';
  details: Scn;
  sub: any;
  constructor(private fivedService: FiveDService, private router: Router) { }

  ngOnInit(): void {
    console.log('in division');
    this.getPage();

  }

  getPage() {
    console.log('in Page');
    let fid = this.fivedService.getCode();
    console.log('second' + fid);

    this.fivedService.getScns(fid).subscribe(det => {
      this.details = det.DATA[0];
      this.sub = this.details.sub_list[0];
      console.log(this.sub[0]);
      this.sub.forEach((data =>{
        console.log(data.fived_id);
      }))
    });

    console.log('end');
  }

  backToDBoard() {
    console.log('back');

    this.router.navigate([``]);
  }



}
