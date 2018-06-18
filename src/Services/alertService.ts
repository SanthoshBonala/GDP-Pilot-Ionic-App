import { AlertController } from 'ionic-angular';
import { Injectable } from '@angular/core';

@Injectable()
export class AlertService {

    constructor( private alertCtrl: AlertController) { }

    generateAlert(title, subtitle, buttons) {

        return this.alertCtrl.create({
            title: title,
            subTitle: subtitle,
            buttons: buttons
        })
    }

}