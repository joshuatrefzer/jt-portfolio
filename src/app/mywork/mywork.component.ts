import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mywork',
  templateUrl: './mywork.component.html',
  styleUrls: ['./mywork.component.scss']
})
export class MyworkComponent implements OnInit {
  
  clickedBefore: number;
  myprojects = [];

  allprojects = [
    {
      'title': 'JOIN',
      'description': 'Join is a web-application in the style of the kanban-board. But the design is a special one! You can crate tasks with specific dates and connetct your personal contacts to the task.',
      'src': 'assets/img/join.png',
      'link': 'https://joshua-trefzer.developerakademie.net/index/index.html',
      'github': 'https://github.com/joshuatrefzer/JOIN',
      'language': 'html/css/js'
    },

    {
      'title': 'LIEFERANDO',
      'description': 'Lieferando is my shopping-cart-project. You can collect dishes, change the number.. dont miss the mobile view',
      'src': 'assets/img/lieferando.png',
      'link': 'https://dev.joshuatrefzer.de/lieferando/index.html',
      'github': 'https://github.com/joshuatrefzer/lieferando',
      'language': 'html/css/js'
    },
    {
      'title': 'EL POLLO LOCO',
      'description': 'This is my 2d game. You have to defeat a endboss with throwing salsa bottles on him..little chickens will try to stop you, but you can defeat them..lets play!',
      'src': 'assets/img/pollo-loco.png',
      'link': 'https://dev.joshuatrefzer.de/pollo_loco/index.html',
      'github': 'https://github.com/joshuatrefzer/EL-Pollo-Loco',
      'language': 'html/css/js'
    },
    {
      'title': 'SLACK',
      'description': 'Slack is a complex buiseness application. You can create channels, and chat-rooms for the exchange and organisation for you team.',
      'src': 'assets/img/slack.png',
      'link': 'https://dev.joshuatrefzer.de/slack/index.html',
      'github': 'https://github.com/joshuatrefzer/EL-Pollo-Loco',
      'language': 'angular'
    }

  ];

  ngOnInit(): void {
    this.selectButton(0);
    this.showAllProjects();
  }


  showAllProjects() {
    this.myprojects = this.allprojects;
  }


  selectButton(id: number) {
    this.updateButton(id);
    this.showAllProjects();
    if (id === 1) {
      this.updateFilter('html/css/js');
    } else if (id === 2) {
      this.updateFilter('angular');
    } else {
      this.showAllProjects();
    }
  }


  updateFilter(language) {
    this.myprojects = this.myprojects.filter(element => element['language'] === language);
  }


  updateButton(id) {
    if (this.clickedBefore >= 0) {
      document.getElementById(`button${this.clickedBefore}`).classList.remove('filter-selected');
    }
    document.getElementById(`button${id}`).classList.add('filter-selected');
    this.clickedBefore = id;
  }


}
