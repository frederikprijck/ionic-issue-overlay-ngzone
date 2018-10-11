import {Component, NgZone, OnInit} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  constructor(
      private alertCtrl: AlertController
  ) { }

  ngOnInit() {
      console.log(`Is in Angular Zone (outer): ${NgZone.isInAngularZone()}`);
      this.alertCtrl
          .create({
              buttons: [
                  {
                      text: 'OK',
                      handler: () => {
                          console.log(`Is in Angular Zone (inner): ${NgZone.isInAngularZone()}`);
                      }
                  }
              ]
          })
          .then(alert => {
              alert.present();
          });
  }
}
