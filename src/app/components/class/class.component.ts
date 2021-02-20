import { Component, OnInit } from '@angular/core';
import { Class } from '../../models/Class';
import { ClassService } from '../../services/class.service';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.css']
})
export class ClassComponent implements OnInit {
  class:Class[]; 

  constructor(private classService:ClassService) { }

  ngOnInit(): void {
    const userInput:string = "fish";
    this.classService.getIsics(userInput).subscribe(classes => {
      this.class = classes.DATA;
    })
  }

  getVal(item){
    const userInput:string = item.value;
    console.log(userInput)
    this.classService.getIsics(userInput).subscribe(classes => {
      this.class = classes.DATA;
    })


}
}
