import { AuthService } from './../../services/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  constructor(private authSvc: AuthService, private router: Router, private toastController: ToastController) {}

  async onLogin(email, password) {
    //this.toast('Error', 'Email o Contraseña invalida', 'warning');
    try {
      const user = await this.authSvc.login(email.value, password.value);
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
      else{
        await this.toast('Error', 'Email o Contraseña invalida', 'warning');
      }
    } catch (error) {
      console.log('Error->', error.message);
    }
  }
  async toast(header, message, color){
      console.log('entroo toas')
      const toast = await this.toastController.create({
      header: header,   
      message: message,
      color: color,
      duration: 5000,
      position: "top"
    });
    toast.present();
  }

  async onLoginGoogle() {
    try {
      const user = await this.authSvc.loginGoogle();
      if (user) {
        const isVerified = this.authSvc.isEmailVerified(user);
        this.redirectUser(isVerified);
      }
    } catch (error) {
      console.log('Error->', error);
    }
  }

  private redirectUser(isVerified: boolean): void {
    if (isVerified) {
      this.router.navigate(['menu']);
    } else {
      this.router.navigate(['verify-email']);
    }
  }
}
