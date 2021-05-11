import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router'
import { FiveDComponent } from '../app/components/fived/fived.component';

import { FiveD } from 'src/app/models/FiveD';
import { FiveDService } from 'src/app/services/fived.service';
import { Class } from 'src/app/models/Class';
import { Group } from 'src/app/models/Group';
import { Div } from 'src/app/models/Div';
import { Scn } from 'src/app/models/Scn';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  constructor( private router: Router) { }


  ngOnInit(): void {
  }

  




}
