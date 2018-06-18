import { Injectable } from '@angular/core';


@Injectable()
export class Usuario {


    public constructor(public firstName: string,
                       public lastName: string,
                       public email: string,
                       public password: string,
                       public avatarUrl: string,
                       public preferredLang: string,
                        public creationDate: string,
                       public connected: boolean
                      ) {

    }

    public getName() {
        return this.firstName + ' ' + this.lastName;
    }
}