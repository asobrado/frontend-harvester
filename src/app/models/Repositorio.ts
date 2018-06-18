import { Injectable } from '@angular/core';


@Injectable()
export class Repositorio {

    public constructor(public nombre:string,
                       public descirpcion: string,
                       public email_contacto: string,
                       public url: string
    ) {
    }


}