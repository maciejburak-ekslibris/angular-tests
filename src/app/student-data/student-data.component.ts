import { Component, Input } from '@angular/core';
import { Student } from 'src/store/types';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.scss'],
})
export class StudentDataComponent {
  @Input() student: Student | undefined;
  createData(){
    const xd= this.student?.birthDate
    let returnedDate;
    if( xd !== undefined){
      returnedDate =  new Date(xd).toLocaleDateString()
    }
    return returnedDate
  }
}
