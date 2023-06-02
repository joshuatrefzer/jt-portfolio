import { Component } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent {
  clickedBefore:number;

  showDescription(idNumber) {
    console.log(idNumber);
    
    // document.getElementById(`project${idNumber}`)
    //HIER WEITER MACHEN -> HOVER EFFEKT - BESCHREIBUNG PROJEKT
  }

  hideDescription(idNumber) {

  }

 selectButton(id:number) {
  if (this.clickedBefore >= 0) {
    document.getElementById(`button${this.clickedBefore}`).classList.remove('filter-selected');
  }
  document.getElementById(`button${id}`).classList.add('filter-selected');
  this.clickedBefore = id;
 }



}
