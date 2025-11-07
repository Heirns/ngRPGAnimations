import { Component } from '@angular/core';
import {animate, keyframes, style, transition, trigger, useAnimation} from "@angular/animations";
import { bounce, pulse, shakeX, wobble } from 'ng-animate';
import { scan } from 'rxjs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
  trigger("death", [
    transition(
      ":increment",
      useAnimation(shakeX, { params: { timing: 0.2} })
    ),
  ]),
  trigger("attack", [
     transition(':increment', [
        useAnimation( wobble),
        useAnimation( pulse, { params: { timing:0.2, scale: 4.5}}),
      ]),
  ]),
  ]
  
  })
export class AppComponent {
  slimeIsPresent = false;
  ng_death = 0;
  ng_attack = 0; 

  css_hit=false;  

  constructor() {
  }

  spawn() {
    this.slimeIsPresent = true;
    // TODO Animation angular avec forwards
    this.showSlime();
  }

  death(){
    this.slimeIsPresent = false;
    this.ng_death++;

    this.hideSlime()

  }

  attack(){
    // TODO Jouer une animation et augmenter l'intensité du mouvement avec scale
    // TODO Jouer une autre animation avant
    this.ng_attack++;
    console.log("attacker")
  }

hit() {
    this.css_hit = true;
    setTimeout(() => this.css_hit = false, 1 * 1000);
  }

  showSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeOut");
    element?.classList.add("fadeIn");
  }
  hideSlime(){
    var element = document.getElementById("slimeyId");
    element?.classList.remove("fadeIn");
    element?.classList.add("fadeOut");
  }
}
