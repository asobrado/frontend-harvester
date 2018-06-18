import { Injectable } from '@angular/core';


@Injectable()
export class TipoPublicacion {

    public constructor(public nombre:string,
                       public descirpcion: string,
                       public email_contacto: string,
                       public url: string
    ) {
    }


}