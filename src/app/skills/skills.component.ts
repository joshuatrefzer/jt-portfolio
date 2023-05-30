import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent  {

  skills = [
    'Java Script',
    'Angular',
    'HTML / CSS',
    'SCRUM',
    'Git',
    'Design Thinking',
    'API',
    'Firebase',
    'Test automation'
  ];

}
