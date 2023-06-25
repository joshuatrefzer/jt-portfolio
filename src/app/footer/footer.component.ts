import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  isPopupOpen = false;

  openPopup() {
    this.isPopupOpen = true;
    document.body.classList.add('popup-open');
  }

  closePopup() {
    this.isPopupOpen = false;
    document.body.classList.remove('popup-open');
  }

  preventClose(event: Event) {
    event.stopPropagation();
  }

 

}
