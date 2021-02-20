import { Component, OnInit, Input } from '@angular/core';
import { Class } from 'src/app/models/Class';

@Component({
  selector: 'app-class-item',
  templateUrl: './class-item.component.html',
  styleUrls: ['./class-item.component.css']
})
export class ClassItemComponent implements OnInit {
  @Input() itemC: Class;
  constructor() { }

  ngOnInit(): void {
  }

    //Set Dynamic Classes
    setClasses() {
      let classes = {
        itemC: true,
        'is-complete': this.itemC.is_deleted
      }
  
      return classes;
    }
  
    //onToggle
    onToggle(item1) {
      console.log('toggle')
    }
  
    //onDelete
    onDelete(item1) {
      console.log('delete')
    }
  

}
