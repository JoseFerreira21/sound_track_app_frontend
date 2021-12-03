import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { UsuarioService } from 'src/app/services/Usuario.service';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  constructor(private service: UsuarioService) { }

 ngOnInit() {
    /*
    this.service.ListarUsuarios().subscribe(
      (result)=>{
        console.log(result);
      }
    );
    */
    this.service.ObtenerUsuarioPorId(1).subscribe(
      (result)=>{
        console.log(result);
      }
    );
   this.getUsuarioAutenticado();   
  }
  getUsuarioAutenticado(){
    //const auth = getAuth();
    //const user = auth.currentUser;
    const user = firebase.auth().currentUser;
    
  if (user !== null) {
  // The user object has basic properties such as display name, email, etc.
    const displayName = user.displayName;
    const email = user.email;
    const photoURL = user.photoURL;
    const emailVerified = user.emailVerified;

    // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    const uid = user.uid;
    console.log(user);
  }
 }
}
