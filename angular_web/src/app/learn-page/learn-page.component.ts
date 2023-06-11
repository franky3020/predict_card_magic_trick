import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';

@Component({
  selector: 'app-learn-page',
  templateUrl: './learn-page.component.html',
  styleUrls: ['./learn-page.component.css']
})
export class LearnPageComponent {

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.localStorageService.userLearned();
  }
  
  goToVedio1() {
    window.open('https://www.youtube.com/shorts/ppQnhk8IS2I', '_system');
  }
}
