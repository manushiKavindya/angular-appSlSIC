import { Component, OnInit, Input } from '@angular/core';
import { FiveD } from '../../models/FiveD';
import { Router } from '@angular/router'
import { FiveDService } from 'src/app/services/fived.service';


@Component({
  selector: 'app-fived',
  templateUrl: './fived.component.html',
  styleUrls: ['./fived.component.css']
})
export class FiveDComponent implements OnInit {
  title = 'FiveD Page';
  details: FiveD;
  constructor(private fivedService: FiveDService, private router: Router) { }

  ngOnInit(): void {
    console.log('in fived');
    this.getPage();

  }



  getPage() {
    console.log('in Page');
    let fid = this.fivedService.getCode();
    console.log('second' + fid);

    this.fivedService.getFiveDs(fid).subscribe(det => {
      this.details = det.DATA[0];
      console.log(this.details);

    });

    console.log('end');
  }

  backToDBoard() {
    console.log('back');

    this.router.navigate([``]);
  }


}
