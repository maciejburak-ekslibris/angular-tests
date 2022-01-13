import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectProjects } from 'src/store/projectCard.reducer';
import { selectSkills } from 'src/store/skillsCard.reducer';
import { selectStudents } from 'src/store/studentCard.reducer';
import { Project, Skills, SkillsCategory, Student } from 'src/store/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements  OnInit  {
  skillName = '';
  skills: {[key: number]: Skills} = {}
  categories: {[key: number]: SkillsCategory} = {}
  projects: {[key: number]: Project} = {}
  filteredStudent(): Student | undefined {
    let students: any 
    let fs;
    this.store.select(selectStudents).subscribe((data) => students = data.byId )
    for (let student in students) {
      if (students[parseInt(student)].id === 1) 
      fs = students[parseInt(student)];
    }
    return fs
  }
  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.select(selectSkills).subscribe((data) => this.skills = data.byId )
    this.store.select(selectSkills).subscribe((data) => this.categories = data.categories.byId )
    this.store.select(selectProjects).subscribe((data) => this.projects = data.byId )
  }
}
