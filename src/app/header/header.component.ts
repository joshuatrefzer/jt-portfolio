import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  clickedBefore;

  selectLink(id: any) {
    if (this.clickedBefore || this.clickedBefore === 0) {
      document.getElementById(`link${this.clickedBefore}`).classList.remove('selected-primary');
    }
    document.getElementById(`link${id}`).classList.add('selected-primary');
    this.clickedBefore = id;
  }
}
