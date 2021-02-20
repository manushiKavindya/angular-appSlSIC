import { Component, OnInit, Input } from '@angular/core';
import { FiveD } from '../../models/FiveD';
import { FiveDService } from '../../services/fived.service';

@Component({
  selector: 'app-fived',
  templateUrl: './fived.component.html',
  styleUrls: ['./fived.component.css']
})
export class FiveDComponent implements OnInit {
   fived:FiveD[]; 
   searchBy:string;
  //  @Input() item1: FiveD;
  selectChangeHandler (event:any){
    this.searchBy = event.target.value;
    return this.searchBy;
  }

  constructor(private fivedService:FiveDService) { }

  ngOnInit(): void {
    // const userInput:string = "fish";
    if(this.searchBy = "Fived"){
      console.log(this.searchBy);
    }
  
  }
 
  

  getVal(item){
    const userInput:string = item.value;

    // if(searchBy=="Fived"){
      this.fivedService.getIsics(userInput).subscribe(fiveds => {
        this.fived = fiveds.DATA;
      })
  

    // }
    // console.log(userInput)
  }


}
