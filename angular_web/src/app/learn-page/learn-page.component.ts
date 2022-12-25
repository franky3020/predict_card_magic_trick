import { Component } from '@angular/core';

@Component({
  selector: 'app-learn-page',
  templateUrl: './learn-page.component.html',
  styleUrls: ['./learn-page.component.css']
})
export class LearnPageComponent {

  constructor() {

  }
  
  goToVedio1() {
    // window.open('https://www.youtube.com/xxx', '_blank');
  }
}
