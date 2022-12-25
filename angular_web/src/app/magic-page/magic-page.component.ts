import { Component } from '@angular/core';
import * as p5 from 'p5';


@Component({
  selector: 'app-magic-page',
  templateUrl: './magic-page.component.html',
  styleUrls: ['./magic-page.component.css']
})
export class MagicPageComponent {

  width = window.outerWidth;
  height = window.outerHeight;


  ngOnInit() {
    console.log("width, height", this.width, this.height);
    const s = (sketch: any) => {

      sketch.setup = () => {

        let magicCloth = sketch.createCanvas(this.width, this.height);
        magicCloth.parent('magicCloth');

        sketch.background(0);

      };

      sketch.draw = () => {
        // if (magicControl.canStartShow && sketch.mouseIsPressed) {
        //   sketch.erase();
        //   sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
        // }

        if (sketch.mouseIsPressed) {
          sketch.erase();
          sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
        }
      };
    };

    new p5(s);
  }



}
