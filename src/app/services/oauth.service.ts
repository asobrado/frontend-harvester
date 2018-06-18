
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';

import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


//simport {REGISTER} from '../pages/services/mocks/register'
import 'rxjs/add/operator/map';
import { GLOBAL} from "./global";
import { GlobalVars } from './global_vars';

import { Usuario} from "../models/Usuario";


@Injectable()
export class OauthService {

  public url = GLOBAL.API_URL;



  constructor(private _http:HttpClient,
              private global_vars: GlobalVars) {
  }
/*
  public signup(usuario): Observable<any> {
      let json = JSON.stringify(usuario);
      let params = 'json='+ json;
      let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');


      return this._http.post(this.url+"\auth",params,{headers:headers})
          .map((response: Response) => {
              let token = response.json() && response.json();
              if (token) {
                  localStorage.setItem('currentUser', JSON.stringify({ username: usuario.username, token: token }));
                  return true;
              } else {
                  return false;
              }
          }).catch((error:any) => Observable.throw( 'Server error'));
    }
*/

    public  getToken(): String {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var token = currentUser && currentUser.token;
        return token ? token : "";
    }

    public logout(): void {
        // clear token remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }




/*
  public register(credentials) {
    if (credentials.firstname === null || credentials.lastname === null || credentials.email === null  {
      return Observable.throw("Ingresá todos los datos");
    } else {
      var url = GLOBAL.API_URL + 'api/public/register';
      var params = {
        nombre: credentials.firstname,
        apellido: credentials.lastname,
        email: credentials.email
      };

      var response = this._http.post(url, params).map(res => res.json());
      return response;
    }
  }

  public registerToken(data) {
    var url = GLOBAL.API_URL + 'oauth/v2/token';

    var response = this._http.post(url, data).map(res => res.json());
    return response;
  }

  public bearerToken() {
    return 'Bearer ' + this.storage.get('token');
  }

  public saveToken(tokenInfo) {
    console.log("Guardo " + tokenInfo.access_token);
    var now = new Date();
    tokenInfo.expiration = now.setSeconds ( now.getSeconds() + parseInt(tokenInfo.expires_in));
    this.storage.set('tokenInfo', tokenInfo);
  }

  public getToken() {
    return this.storage.get('tokenInfo');
  }

  public getProfile() {
    return this.storage.get('profile');
  }

  public logout() {
    this.storage.remove('tokenInfo');
    this.storage.remove('token');
    this.storage.remove('profile');
    this.global_vars.setIsAuthenticated(false);
  }*/
}
