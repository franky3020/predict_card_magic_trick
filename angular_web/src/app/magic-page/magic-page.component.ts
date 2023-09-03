import { Component } from '@angular/core';
import { Router } from '@angular/router';
import * as p5 from 'p5';
import { MagicControl } from "../MagicControl";
import { CordovaPluginService } from "../cordova-plugin.service";


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
  selfBackToHomePage: any;
  selfClearKeepTouchTwoFingerTimer: any;

  cardImgPath = '';
  cardWidth = '';
  cardHeight = '';

  keepTouchTwoFingerTimer: NodeJS.Timeout| undefined = undefined;
  keppTouchReloadTime = 2500;

  openBrightness = false;

  p5Obj: p5 | undefined;

  constructor(
    private router: Router,
    private cordovaPluginService: CordovaPluginService
    ) {
    this.magicControl = new MagicControl(this.width, this.height);
    this.selfSetCard = this.setCard.bind(this);
    this.selfBackToHomePage = this.backToHomePage.bind(this);
    this.selfClearKeepTouchTwoFingerTimer = this.clearKeepTouchTwoFingerTimer.bind(this);
  }


  ngOnInit() {

    // 先把 brightness 調到最暗
    this.cordovaPluginService.setBrightness(0);

    this.cordovaPluginService.powermanagementAcquire();

    const s = (sketch: any) => {

      sketch.setup = () => {

        let magicCloth = sketch.createCanvas(this.width, this.height);
        magicCloth.parent('magicCloth');

        sketch.background(0);
        sketch.erase();
      };

      sketch.draw = () => {
        if (this.canStartShow && sketch.mouseIsPressed) {

          if(this.openBrightness === false) {
            this.cordovaPluginService.setBrightness(0.5);
            this.openBrightness = true;
          }
          
          sketch.ellipse(sketch.mouseX, sketch.mouseY, 80, 80);
        }
      };
    };

    this.p5Obj = new p5(s);
    

    this.addSetCradEvent();
    this.addBackToHomePageEvent();

  }

  addSetCradEvent() {
    document.addEventListener("touchstart", this.selfSetCard);
  }

  setCard(event: TouchEvent) {

    if (typeof this.magicControl.cardNumber !== "undefined") {
      return;
    }
    this.magicControl.chooseCardV2(event.touches[0].clientX, event.touches[0].clientY);
    // console.log("card number", this.magicControl.cardNumber);
    // console.log("card cardSuit", this.magicControl.cardSuit);


    this.setCardWidth();

    if (typeof this.magicControl.cardNumber !== "undefined" &&
      typeof this.magicControl.cardSuit !== "undefined") {

      this.setCardImgPath(this.magicControl.cardNumber, this.magicControl.cardSuit);
      this.canStartShow = true;
    }



  }

  setCardImgPath(cardNumber: number, cardSuit: string) {

    if (cardNumber === 11) {

      if (cardSuit === "spade") {
        this.cardImgPath = "assets/cards/sj_compressed.jpg";
      } else if (cardSuit === "heart") {
        this.cardImgPath = "assets/cards/hj_compressed.jpg";
      } else if (cardSuit === "diamond") {
        this.cardImgPath = "assets/cards/dj_compressed.jpg";
      } else { // club
        this.cardImgPath = "assets/cards/cj_compressed.jpg";
      }
    } else if (cardNumber === 12) {


      if (cardSuit === "spade") {
        this.cardImgPath = "assets/cards/sq_compressed.jpg";
      } else if (cardSuit === "heart") {
        this.cardImgPath = "assets/cards/hq_compressed.jpg";
      } else if (cardSuit === "diamond") {
        this.cardImgPath = "assets/cards/dq_compressed.jpg";
      } else { // club
        this.cardImgPath = "assets/cards/cq_compressed.jpg";
      }


    } else { // cardNumber === 13

      if (cardSuit === "spade") {
        this.cardImgPath = "assets/cards/sk_compressed.jpg";
      } else if (cardSuit === "heart") {
        this.cardImgPath = "assets/cards/hk_compressed.jpg";
      } else if (cardSuit === "diamond") {
        this.cardImgPath = "assets/cards/dk_compressed.jpg";
      } else { // club
        this.cardImgPath = "assets/cards/ck_compressed.jpg";
      }

    }
  }

  // 防止過扁的手機 讓圖片太大
  setCardWidth() {

    if (this.height / this.width > 1.4) {
      this.cardWidth = this.width * 0.9 + 'px';
    } else {
      this.cardHeight = this.height * 0.9 + 'px';
    }

  }


  ngOnDestroy() {
    console.log("magic page ngOnDestroy");
    document.removeEventListener("touchstart", this.selfSetCard);
    this.removeBackToHomePageEvent();

    this.cordovaPluginService.setBrightness(0.5);

    if (typeof this.p5Obj !== "undefined") {
      this.p5Obj.remove();
    }
  }

  addBackToHomePageEvent() {
    document.addEventListener("touchstart", this.selfBackToHomePage);
    document.addEventListener("touchend", this.selfClearKeepTouchTwoFingerTimer);
  }

  removeBackToHomePageEvent() {
    document.removeEventListener("touchstart", this.selfBackToHomePage);
    document.removeEventListener("touchend", this.selfClearKeepTouchTwoFingerTimer);
  }

  backToHomePage(event: TouchEvent) {
    if (event.touches.length === 2) {

      if (typeof this.keepTouchTwoFingerTimer !== "undefined") {
        clearTimeout(this.keepTouchTwoFingerTimer);
      }

      this.keepTouchTwoFingerTimer = setTimeout(() => {
        // console.log("test backToHomePage");
        this.router.navigate(['']);
      }, this.keppTouchReloadTime);

    }
  }

  clearKeepTouchTwoFingerTimer() {
    if (typeof this.keepTouchTwoFingerTimer !== "undefined") {
      clearTimeout(this.keepTouchTwoFingerTimer);
    }
  }

}
