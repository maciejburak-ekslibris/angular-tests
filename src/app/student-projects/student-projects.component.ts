import { Component, Input, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { Project, Student } from 'src/store/types';

@Component({
  selector: 'app-student-projects',
  templateUrl: './student-projects.component.html',
  styleUrls: ['./student-projects.component.css'],
})
export class StudentProjectsComponent implements OnInit {
  columnTitles = ['Nazwa firmy', 'Projekt', 'Od', 'Do'];
  @Input() student: Student | undefined;
  @Input() projects: { [key: number]: Project } | undefined;
  dateFormat(data: string | number | null | undefined) {
    let date
    !data ? '-' : date = new Date(data).getMonth() + 1 +'/' + new Date(data).getFullYear();

    return date
  }
  filterExactProjects(){
    const exactProjects = [];
    for(let project in this.projects){
      if(this.student?.projects.includes(this.projects[parseInt(project)].id)){
        exactProjects.push(this.projects[parseInt(project)]);
      }
    }
    return exactProjects;
  }
  constructor() {}

  ngOnInit(): void {}
}
