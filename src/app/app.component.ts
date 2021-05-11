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
  fived: FiveD[];
  class: Class[]; 
  group: Group[];
  division: Div[];
  section: Scn[];

  searchBy: string ;
  selectChangeHandler(event: any) {
    this.searchBy = event.target.value;
    return this.searchBy;
  }

  constructor(private fivedService: FiveDService, private router: Router) { }


  ngOnInit(): void {
  }

  selectLevel() {
    console.log(this.searchBy);
  }

  getVal(item) {
    if (item) {
      const userInput: string = item.value;      
      if(this.searchBy == "Fived" ){
        console.log(userInput);

        this.fivedService.getFiveDs(userInput).subscribe(fiveds => {
          this.fived = fiveds.DATA;
        });
      }
      if(this.searchBy == "Class" ){
        this.fivedService.getClasses(userInput).subscribe(classes => {
          this.class = classes.DATA;
        });

      }
      if(this.searchBy == "Group" ){
        this.fivedService.getGroups(userInput).subscribe(groups => {
          this.group = groups.DATA;
        });

      }
      if(this.searchBy == "Division" ){
        this.fivedService.getDivs(userInput).subscribe(divs => {
          this.division = divs.DATA;
        });

      }
      if(this.searchBy == "Section" ){
        this.fivedService.getScns(userInput).subscribe(scns => {
          this.section = scns.DATA;
        });

      }
    } else {
      console.log('empty');
      alert('Give a Keyword');
    }
  }

  fiveDDetails(){
    console.log('here');
    this.router.navigate([`/FiveD`]);
  }


}
