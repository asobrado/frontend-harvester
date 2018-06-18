import { Injectable } from '@angular/core';


@Injectable()
export class Idioma {

    public constructor(public nombre:string,
                       public iso639: string

    ) {
    }


}