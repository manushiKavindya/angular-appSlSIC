import { Component, OnInit, Input } from '@angular/core';
import { FiveD } from '../../models/FiveD';
import {Router} from '@angular/router'


@Component({
  selector: 'app-fived',
  templateUrl: './fived.component.html',
  styleUrls: ['./fived.component.css']
})
export class FiveDComponent implements OnInit {
  title = 'FiveD Page';
  details:FiveD;

  ngOnInit(): void {
    console.log('in fived');
  }

  getPage(){
    console.log('in Page');
    
  }

}
