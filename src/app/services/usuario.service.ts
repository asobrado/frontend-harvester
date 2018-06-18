import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable} from "rxjs/Observable";
import { GLOBAL} from "./global";
import { Usuario} from "../models/Usuario";


@Injectable()
export class UsuarioService {


    public url: string;


  constructor(  public _http: HttpClient
            )
  {
      this.url = GLOBAL.API_URL;

  }

    public listarUsuario(): Observable<any[]> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url+"usuarios",{headers:headers})
    }

    public agregarUsuario(usuario: Usuario): Observable<any>{
        let json = JSON.stringify(usuario);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'repositorio', params, {headers: headers});
    }

    public editarUsuario(usuario: Usuario): Observable<any>{
        let json = JSON.stringify(usuario);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.put(this.url+'usuario', params, {headers: headers});
    }


    public eliminarUsuario(usuario: Usuario): Observable<any>{
        let json = JSON.stringify(usuario);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.delete(this.url+'usuario', {headers: headers});
    }



}
