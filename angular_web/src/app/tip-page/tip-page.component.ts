import { Component } from '@angular/core';
import * as p5 from 'p5';

@Component({
  selector: 'app-tip-page',
  templateUrl: './tip-page.component.html',
  styleUrls: ['./tip-page.component.css']
})
export class TipPageComponent {

  ngOnInit() {
    const s = (sketch: any) => {

      sketch.setup = () => {

        let width = 300;
        let height = 300;

        let magicCloth = sketch.createCanvas(width, height);
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
