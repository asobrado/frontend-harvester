import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable} from "rxjs/Observable";
import { GLOBAL} from "./global";
import {TipoPublicacion} from "../models/TipoPublicacion";


@Injectable()
export class TiposPublicacionService {


    public url: string;


  constructor(  public _http: HttpClient
            )
  {
      this.url = GLOBAL.API_URL;

  }

    public listarTipoPublicacion(): Observable<any[]> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url+"tipo_pulicacion",{headers:headers})
    }

    public agregarTipoPublicacion(tipo_publicacion: TipoPublicacion): Observable<any>{
        let json = JSON.stringify(tipo_publicacion);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'tipo_publicacion', params, {headers: headers});
    }

    public editarTipoPublicacion(tipo_publicacion: TipoPublicacion): Observable<any>{
        let json = JSON.stringify(tipo_publicacion);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.put(this.url+'tipo_publicacion', params, {headers: headers});
    }


   public eliminarTipoPublicacion(tipo_publicacion: TipoPublicacion): Observable<any>{
       let json = JSON.stringify(tipo_publicacion);
       let params = "json="+json;
       let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
       return this._http.delete(this.url+'tipo_publicacion', {headers: headers});
   }




}
