import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router'

import { FiveD } from 'src/app/models/FiveD';
import { FiveDService } from 'src/app/services/fived.service';
import { Class } from 'src/app/models/Class';
import { Group } from 'src/app/models/Group';
import { Div } from 'src/app/models/Div';
import { Scn } from 'src/app/models/Scn';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.css']
})
export class DashBoardComponent implements OnInit {

  fived: FiveD[];
  class: Class[];
  group: Group[];
  division: Div[];
  section: Scn[];
  title: string = "SLSIC";
  // loggedIn:boolean = UserComponent.loggedIn;

  selectedLevel: string = "Fived";
  // opened = false;
  

  constructor(private fivedService: FiveDService, private router: Router, private userService: UserService) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }


  ngOnInit(): void {
  }

  // selectLevel() {
  // }

  getVal(item) {
    console.log(this.selectedLevel);

    console.log(item.value);
    
    if (item) {
      const userInput: string = item.value;
      if (this.selectedLevel == "Fived") {
        console.log(userInput);

        this.fivedService.getFiveDs(userInput).subscribe(fiveds => {
          this.fived = fiveds.DATA;
        });
        
      }
      if (this.selectedLevel == "Class") {
        this.fivedService.getClasses(userInput).subscribe(classes => {
          this.class = classes.DATA;
        });

      }
      if (this.selectedLevel == "Group") {
        this.fivedService.getGroups(userInput).subscribe(groups => {
          this.group = groups.DATA;
        });

      }
      if (this.selectedLevel == "Division") {
        this.fivedService.getDivs(userInput).subscribe(divs => {
          this.division = divs.DATA;
        });

      }
      if (this.selectedLevel == "Section") {
        this.fivedService.getScns(userInput).subscribe(scns => {
          this.section = scns.DATA;
        });

      }
    } else {
      console.log('empty');
      alert('Give a Keyword');
    }
  }
  login(){
    this.router.navigate([`/LOGIN`]);
  }

  fiveDDetails(fid: string) {
    console.log('here fived');
    this.fivedService.setCode(fid);
    console.log(fid);
    this.router.navigate([`/FiveD`]);
  }

  classDetails(fid: string) {
    console.log('here class');
    this.fivedService.setCode(fid);
    console.log(fid);
    this.router.navigate([`/Class`]);
  }

  groupDetails(fid: string) {
    console.log('here group');
    this.fivedService.setCode(fid);
    console.log(fid);
    this.router.navigate([`/Group`]);
  }

  divDetails(fid: string) {
    console.log('here division');
    this.fivedService.setCode(fid);
    console.log(fid);
    this.router.navigate([`/Division`]);
  }

  scnDetails(fid: string) {
    console.log('here section');
    this.fivedService.setCode(fid);
    console.log(fid);
    this.router.navigate([`/Section`]);
  }






}
