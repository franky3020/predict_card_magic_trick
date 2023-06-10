import { Component } from '@angular/core';
import { LocalStorageService } from '../local-storage.service';
declare var cordova: any;

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent {


  isUserLearned = false;

  constructor(
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit() {
    this.isUserLearned = this.localStorageService.isUserLearned();
  }
  
}
