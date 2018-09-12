import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Flashlight } from '@ionic-native/flashlight';
import { Observable } from 'rxjs';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  timerSubscription: any;

  constructor(
    public navCtrl: NavController,
    private flashlight: Flashlight) {

  }

  ionViewDidEnter() {

    let timer = Observable.timer(1, 10);

    this.timerSubscription = timer.subscribe((t: any) => {
      this.flashlight.toggle();
    });

  }

}
