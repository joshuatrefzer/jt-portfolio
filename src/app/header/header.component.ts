import { Component, OnInit, HostListener } from '@angular/core';
import { ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  clickedBefore = 0;
  mobileView = false;
  isRotated: boolean = false;
  hideMobileHeader: boolean = false;

  ngOnInit(): void {
    this.selectLink(0);
  }

  scrollToTop(): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }


  selectLink(id: any) {

    if (this.clickedBefore || this.clickedBefore === 0) {
      document.getElementById(`link${this.clickedBefore}`).classList.remove('selected-primary');
      document.getElementById(`link-mobile${this.clickedBefore}`).classList.remove('selected-primary');
    }
    document.getElementById(`link-mobile${id}`).classList.add('selected-primary');
    document.getElementById(`link${id}`).classList.add('selected-primary');
    this.clickedBefore = id;
  }


  rotateImage() {
    this.hideMobileHeader = !this.hideMobileHeader;
    this.isRotated = !this.isRotated;
  }


}
