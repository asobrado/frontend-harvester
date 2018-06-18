import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable} from "rxjs/Observable";
import { GLOBAL} from "./global";


@Injectable()
export class UsuariosService {


    public url: string;


  constructor(  public _http: HttpClient
            )
  {
      this.url = GLOBAL.url_api;

  }


   listarUsuarios(){

   }

   agregarUsuario(){

   }


   editarUsuario(){

   }


   eliminarUsuario(){

   }



}
