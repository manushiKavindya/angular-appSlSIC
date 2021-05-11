import { Component, OnInit } from '@angular/core';
import { Div } from '../../models/Div';
import { Router } from '@angular/router'
import { FiveDService } from 'src/app/services/fived.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  title = 'Division Page';
  details: Div;
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

    this.fivedService.getDivs(fid).subscribe(det => {
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
