import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-user-info',
  templateUrl: 'user-info.html',
})
export class UserInfoPage {
  user = {}
  userattributes = []
  options = { year: 'numeric', month: 'long', day: 'numeric' }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
   this.user = this.navParams.get('user')
   console.log(this.user)
   this.user['dob'] = new Date(this.user['dob']).toLocaleDateString('en-us', this.options )
    this.userattributes = ['firstName', 'lastName', 'gender', 'status', 'email','dob']
  }

}
