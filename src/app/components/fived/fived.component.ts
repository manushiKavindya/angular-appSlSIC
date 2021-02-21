import { Component, OnInit, Input } from '@angular/core';
import { FiveD } from '../../models/FiveD';
import { FiveDService } from '../../services/fived.service';

@Component({
  selector: 'app-fived',
  templateUrl: './fived.component.html',
  styleUrls: ['./fived.component.css']
})
export class FiveDComponent implements OnInit {
  fived: FiveD[];
  searchBy: string;
  results: number = 0;
  selectChangeHandler(event: any) {
    this.searchBy = event.target.value;
    return this.searchBy;
  }

  constructor(private fivedService: FiveDService) { }

  ngOnInit(): void {
  }

  selectLevel() {
    console.log(this.searchBy);
  }

  getVal(item) {
    if (item) {
      const userInput: string = item.value;
      this.fivedService.getIsics(userInput).subscribe(fiveds => {
        this.fived = fiveds.DATA;
      })

      this.results = this.fived.length;

    } else {
      console.log('empty');

      alert('Give a Keyword');
    }
  }


}
