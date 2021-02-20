import { Component, OnInit } from '@angular/core';
import { Div } from '../../models/DIv';
import { DivisionService } from '../../services/division.service';

@Component({
  selector: 'app-division',
  templateUrl: './division.component.html',
  styleUrls: ['./division.component.css']
})
export class DivisionComponent implements OnInit {
  division:Div[]; 

  constructor(private divService:DivisionService) { }

  ngOnInit(): void {
    const userInput:string = "fish";
    this.divService.getIsics(userInput).subscribe(divisions => {
      this.division = divisions.DATA;
    })

  }

}
