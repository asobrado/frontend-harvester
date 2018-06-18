import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Observable} from "rxjs/Observable";
import { GLOBAL} from "./global";


@Injectable()
export class RepositoriosService {


    public url: string;


  constructor(  public _http: HttpClient
            )
  {
      this.url = GLOBAL.API_URL;

  }


   listarRepositorio(){

   }

   agregarRepositorio(){

   }


   editarRepositorio(){

   }


   eliminarRepositorio(){

   }



}
