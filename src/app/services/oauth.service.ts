
import { HttpClient, Headers} from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
//simport {REGISTER} from '../pages/services/mocks/register'
import 'rxjs/add/operator/map';
import { GLOBAL} from "./global";
import { GlobalVars } from './global_vars';

import { Usuario} from "../models/Usuario";


@Injectable()
export class AuthService {

  constructor(private _http:HttpClient,
              private global_vars: GlobalVars) {
  }

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
  }
}
