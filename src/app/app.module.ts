import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HttpService } from '../Services/HttpService';
import { HomePage } from '../pages/home/home';
import { AlertService } from '../Services/alertService';
import { LoginPageModule } from '../pages/login/login.module';
import { UsersListPageModule } from '../pages/users-list/users-list.module';
import { UserInfoPageModule } from '../pages/user-info/user-info.module';
import { AddUserPageModule } from '../pages/add-user/add-user.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    LoginPageModule,
    UsersListPageModule,
    UserInfoPageModule,
    AddUserPageModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    HttpService,
    AlertService
  ]
})
export class AppModule {}
