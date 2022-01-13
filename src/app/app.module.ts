import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { studentCardReducer } from 'src/store/studentCard.reducer';
import { StudentSkillsComponent } from './student-skills/student-skills.component';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentCommentsComponent } from './student-comments/student-comments.component';
import { projectCardReducer } from 'src/store/projectCard.reducer';
import { comentCardReducer } from 'src/store/commentCard.reducer';
import { skillsCardReducer } from 'src/store/skillsCard.reducer';
import { FormsModule } from '@angular/forms';
import { StudentProjectsComponent } from './student-projects/student-projects.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentSkillsComponent,
    StudentDataComponent,
    StudentCommentsComponent,
    StudentProjectsComponent
  ],
  imports: [
    StoreModule.forRoot({students: studentCardReducer, projects: projectCardReducer, comments: comentCardReducer, skills: skillsCardReducer}),
    StoreDevtoolsModule.instrument(),
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
