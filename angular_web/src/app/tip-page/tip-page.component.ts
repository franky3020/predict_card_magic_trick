import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tip-page',
  templateUrl: './tip-page.component.html',
  styleUrls: ['./tip-page.component.css']
})
export class TipPageComponent {

  cardHeight = (window.outerHeight / 4) + 'px';

  constructor(
    private router: Router,
  ) {}

  goToHomePage() {
    this.router.navigate(['']);
  }



}
