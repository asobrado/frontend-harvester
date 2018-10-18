import { Injectable } from '@angular/core';


@Injectable()
export class TipoPublicacion {

    public constructor(public nombre:string,
                       public descripcion: string

    ) {
    }


}