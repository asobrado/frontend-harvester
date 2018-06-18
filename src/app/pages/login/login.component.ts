import { Component, OnInit, OnDestroy } from '@angular/core';
import { Usuario} from "../../models/Usuario";
import { OauthService } from "../../services/oauth.service";
import { User, UserService } from 'ngx-admin-lte';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  styles: ['./login.css'],
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  public usuario: Usuario;
  public token;
  public identity;

    model: any = {};
    loading = false;
    error = '';

  constructor(
    private _oauthService: OauthService,
    private router: Router,
    private userServ: UserService
  ) {

    this.usuario=  new Usuario('','','','','','','',false);
  }

  public ngOnInit() {
    window.dispatchEvent( new Event( 'resize' ) );
      this._oauthService.logout();

  }

  public onSubmit(form) {

      this.loading = true;

      console.log('entro');

      let user1 = new User( {
          avatarUrl: 'public/assets/img/user2-160x160.jpg',
          email: 'weber.antoine.pro@gmail.com',
          firstname: 'WEBER',
          lastname: 'Antoine'
      });
      user1.connected = true;
      this.router.navigate(['home']);
      this.userServ.setCurrentUser( user1 );

      /*this._oauthService.signup(this.usuario).subscribe(result=>{
          if (result === true) {
                this.router.navigate(['home']);
          } else {
                this.error = 'Usuario y password no son correctos';
                this.loading = false;
          }
      }, error => {
            this.loading = false;
            this.error = error;
            console.log(<any>error);
       });*/
    }


}
