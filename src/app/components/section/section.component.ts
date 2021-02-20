import { Component, OnInit } from '@angular/core';
import { Scn } from '../../models/Scn';
import { SectionService } from '../../services/section.service';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  section:Scn[]; 

  constructor(private sectionService:SectionService) { }

  ngOnInit(): void {
    const userInput:string = "fish";
    this.sectionService.getIsics(userInput).subscribe(sections => {
      this.section = sections.DATA;
    })

  }

}
