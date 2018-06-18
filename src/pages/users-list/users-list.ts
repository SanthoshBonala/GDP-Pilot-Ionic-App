import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { AddUserPage } from '../add-user/add-user';
import { HttpService } from '../../Services/HttpService';
import { UserInfoPage } from '../user-info/user-info';


@IonicPage()
@Component({
  selector: 'page-users-list',
  templateUrl: 'users-list.html',
})
export class UsersListPage {
  users = []
  constructor(public navCtrl: NavController, public navParams: NavParams,private modalCtrl: ModalController,private http:HttpService) {}
  ionViewWillEnter(){
    console.log(this.navCtrl.getViews())
      this.http.getHttpService('getUsersList').subscribe(
        response => {
            this.users = JSON.parse(response['_body']).data
        },
        error => {
            console.log(error)
        }
      )
  }

   Signout(){
     console.log(this.navCtrl.getViews())
    this.modalCtrl.create(LoginPage).present()
   }
   AddUser(){
     console.log(this.navCtrl.getViews())
     this.navCtrl.push(AddUserPage)
   }

   userinfo(user){
     console.log(this.navCtrl.getViews())
      this.navCtrl.push(UserInfoPage,{
        user: user
      })
   }

   doRefresh(refresher){
     this.http.getHttpService('getUsersList').subscribe(
       response => {
         this.users = JSON.parse(response['_body']).data
       },
       error => {
         console.log(error)
       },
       () => {
         refresher.complete()
       }
     )

   }

}
