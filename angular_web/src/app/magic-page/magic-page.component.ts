import { Component } from '@angular/core';
import * as p5 from 'p5';
import { MagicControl } from "../MagicControl";

@Component({
  selector: 'app-magic-page',
  templateUrl: './magic-page.component.html',
  styleUrls: ['./magic-page.component.css']
})
export class MagicPageComponent {

  width = window.outerWidth;
  height = window.outerHeight;

  magicControl: MagicControl
  canStartShow = false;

  selfSetCard: any;

  constructor() {
    this.magicControl = new MagicControl(this.width, this.height);
    this.selfSetCard = this.setCard.bind(this);
  }


  ngOnInit() {
    console.log("width, height", this.width, this.height);
    const s = (sketch: any) => {

      sketch.setup = () => {

        let magicCloth = sketch.createCanvas(this.width, this.height);
        magicCloth.parent('magicCloth');

        sketch.background(0);

      };

      sketch.draw = () => {
        if (this.canStartShow && sketch.mouseIsPressed) {
          sketch.erase();
          sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
        }
      };
    };

    new p5(s);

    this.addSetCradEvent();
  }

  addSetCradEvent() {
    document.addEventListener("touchstart", this.selfSetCard);
  }

  setCard(event: any) {

    console.log("run setCard() touchstart Event");

    if (typeof this.magicControl.cardNumber !== "undefined") {
      return;
    }
    this.magicControl.chooseCardV2(event.touches[0].clientX, event.touches[0].clientY);
    console.log("card number", this.magicControl.cardNumber);
    console.log("card cardSuit", this.magicControl.cardSuit);
    this.canStartShow = true;
  }

  ngOnDestroy() {
    console.log("MagicPageComponent ngOnDestroy");
    document.removeEventListener("touchstart", this.selfSetCard);
  }

}
