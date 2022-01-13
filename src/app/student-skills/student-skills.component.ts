import { Component, Input, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { addSkill, selectSkills } from 'src/store/skillsCard.reducer';
import { Skills, SkillsCategory, Student } from 'src/store/types';

@Component({
  selector: 'app-student-skills',
  templateUrl: './student-skills.component.html',
  styleUrls: ['./student-skills.component.css']
})
export class StudentSkillsComponent implements OnInit {
  skillName = '';
  skillRate = 0;
  skillCategory = '';
  @Input() student: Student | undefined;
  @Input() skills: { [key: number]: Skills; } | undefined;
  @Input() categories: { [key: number]: SkillsCategory; } | undefined;
  getSkillByCategory(categoryId: number): Array<Skills> | undefined{
    const returnValue: Array<Skills> = []
    for(let skill in this.skills){
      if(this.skills[parseInt(skill)].category === categoryId){
        returnValue.push(this.skills[parseInt(skill)]);
      }
    }
    return returnValue 
  }
  getLastId(): number{
    let returnedId = 0
    if(this.skills !== undefined)
    returnedId =  parseInt(Object.keys(this.skills)[Object.keys(this.skills).length -1 ])

    return returnedId + 1
  }
  findCategoryId(categoryName: string): number {
    let returnedCategoryNumber = 0;
    for(let category in this.categories){
      if(this.categories[parseInt(category)].name === categoryName) {
        returnedCategoryNumber =  this.categories[parseInt(category)].id
      }
    }
    return returnedCategoryNumber;
  }
  addNewSkill(){
    const newSkill = {
      id: this.getLastId(),
      name: this.skillName,
      rate: this.skillRate,
      category: this.findCategoryId(this.skillCategory)
    }
      this.store.dispatch(addSkill({ newSkill }));
      this.skillName = '';
      this.skillRate = 0;
      this.skillCategory= '';
  }
  constructor(private store:  Store) {
   }

   ngOnInit(): void {
  }
}
