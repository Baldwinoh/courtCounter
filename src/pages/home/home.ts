import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WinnerPage } from '../winner/winner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
  scoreForTeamA = 0;
  scoreForTeamB = 0;

  teamA(value: number): void {
    this.scoreForTeamA += value;

  }


  teamB(value: number): void {
    this.scoreForTeamB += value;

  }

reset():void{
  this.scoreForTeamA=0;
  this.scoreForTeamB =0;
}
  displayScore(): void{
  this.navCtrl.push(WinnerPage)

}
  constructor(public navCtrl: NavController) {

  }

}
