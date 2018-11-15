import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";


import { Observable} from "rxjs/Observable";
import { GLOBAL} from "./global";
import {Repositorio} from "../models/Repositorio";


@Injectable()
export class HarvesterService {


    public url: string;


  constructor(  public _http: HttpClient
            )
  {
      this.url = GLOBAL.API_URL;

  }

    public listarHarvesters(): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-www-form-urlencoded');
        return this._http.get(this.url+"harvesters")
    }

    public agregarHarvesters(repositorio: Repositorio): Observable<any>{
        let json = JSON.stringify(repositorio);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.post(this.url+'repositorio', params, {headers: headers});
    }

    public editarHarvesters(id,repositorio: Repositorio): Observable<any>{
        let json = JSON.stringify(repositorio);
        let params = "json="+json;
        let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
        return this._http.put(this.url+'repositorio/'+id, params, {headers: headers});
    }


   public eliminarHarvesters(repositorio: Repositorio): Observable<any>{
       let json = JSON.stringify(repositorio);
       let params = "json="+json;
       let headers = new HttpHeaders().set('Content-Type','application/x-www-form-urlencoded');
       return this._http.delete(this.url+'repositorio', {headers: headers});
   }




}
