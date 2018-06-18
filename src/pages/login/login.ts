import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { HttpService } from '../../Services/HttpService';
import { UsersListPage } from '../users-list/users-list';
import { AlertService } from '../../Services/alertService';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  email: String;
  password: String;

  constructor(public navCtrl: NavController, private viewCtrl: ViewController, private http: HttpService, private modalctrl: ModalController, private alertctrl: AlertService) {
  }

  signin() {

    this.http.postHttpService('signin', {
      email: this.email,
      password: this.password
    })
      .subscribe(
        response => {

          this.navCtrl.setRoot(UsersListPage)
        },
        error => {
          console.log(error)
          this.alertctrl.generateAlert('Try Again', JSON.parse(error['_body']).message, ['Ok']).present()
        })
  }
}
