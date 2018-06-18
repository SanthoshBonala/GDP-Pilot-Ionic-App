import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HttpService } from '../../Services/HttpService';
import { AlertService } from '../../Services/alertService';

@IonicPage()
@Component({
  selector: 'page-add-user',
  templateUrl: 'add-user.html',
})
export class AddUserPage {
  userdata = {};
  date = new Date().toISOString();
  constructor(private alertCtrl: AlertService, public navCtrl: NavController, public navParams: NavParams, private http: HttpService) {
  }
  signup() {
    console.log(this.userdata)
    if(Object.keys(this.userdata).length != 7){
      this.alertCtrl.generateAlert("Please Provide Details", "No field can be empty", ['Enter Info']).present()
      return;
    }
    for (let value in this.userdata) {
      if (this.userdata[value].length < 3) {
        console.log(this.userdata[value].length)
        this.alertCtrl.generateAlert("Please Enter Valid Details", "Each field need to be atleast three characters", ['Try Again']).present()
        return;
      }
    }

    if (!/^\w+@\w+(\.\w{2,3})+$/.test(this.userdata['email'])){
      this.alertCtrl.generateAlert("Invalid Email", "Please Enter Valid Email", ['Ok']).present()
      return;
    }

    this.http.postHttpService('signup', this.userdata).subscribe(
      response => {
        console.log(response)
        this.navCtrl.pop()
      },
      error => {
        console.log(error)
      }
    )


  }





}
