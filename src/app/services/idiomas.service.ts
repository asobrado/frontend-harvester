import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable} from "rxjs/Observable";
import { GLOBAL} from "./global";
import {Idioma} from "../models/Idioma";


@Injectable()
export class IdiomasService {


    public url: string;


  constructor(  public _http: HttpClient
            )
  {
      this.url = GLOBAL.API_URL;

  }

    public listarIdiomas(): Observable<any[]> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url+"idiomas",{headers:headers})
    }

    public agregarIdioma(idioma: Idioma): Observable<any>{
        let json = JSON.stringify(idioma);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'idioma', params, {headers: headers});
    }

    public editarIdioma(idioma: Idioma): Observable<any>{
        let json = JSON.stringify(idioma);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.put(this.url+'idioma', params, {headers: headers});
    }


   public eliminarIdioma(idioma: Idioma): Observable<any>{
       let json = JSON.stringify(idioma);
       let params = "json="+json;
       let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
       return this._http.delete(this.url+'idioma', {headers: headers});
   }




}
