import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})


export class AppComponent {
  
  isUserLogged : Boolean = false;
  
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public authSvc: AuthService
  ) {
    this.initializeApp();
    this.logout();
    this.verificarUsuario();
  }
  

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  logout(){
    this.authSvc.SignOut();
  }

  verificarUsuario(){
    let user = this.authSvc.VerificarUsuario();
    if (user){ 
      this.isUserLogged = true;
      console.log ('Funciona')
    }
  }

  
}


