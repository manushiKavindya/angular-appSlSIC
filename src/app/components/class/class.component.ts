import { Component, OnInit } from '@angular/core';
import { Class, sub } from '../../models/Class';
import { Router } from '@angular/router'
import { FiveDService } from 'src/app/services/fived.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  title = 'Class Page';
  details: Class;
  sub: any;
  constructor(private fivedService: FiveDService, private router: Router, private  _location: Location ) {  }


  ngOnInit(): void {
    console.log('in class');
    this.getPage();

  }

  getPage() {
    console.log('in Page');
    let fid = this.fivedService.getCode();
    console.log('second' + fid);

    this.fivedService.getClasses(fid).subscribe(det => {
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
    this._location.back();
    this.router.navigate([``]);
  }
}

