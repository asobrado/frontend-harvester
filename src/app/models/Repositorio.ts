import { Injectable } from '@angular/core';


@Injectable()
export class Repositorio {

    public constructor(public id: string,
                       public nombre:string,
                       public descripcion: string,
                       public contactEmail: string,
                       public url: string
    ) {
    }


}