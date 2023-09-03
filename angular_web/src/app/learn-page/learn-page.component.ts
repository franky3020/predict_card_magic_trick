import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learn-page',
  templateUrl: './learn-page.component.html',
  styleUrls: ['./learn-page.component.css']
})
export class LearnPageComponent {

  constructor(
    private localStorageService: LocalStorageService,
    private router: Router,
  ) {}

  ngOnInit() {
    this.localStorageService.userLearned();
  }
  
  goToVedio1() {
    window.open('https://www.youtube.com/shorts/ppQnhk8IS2I', '_system');
  }

  goToHomePage() {
    this.router.navigate(['']);
  }
}
