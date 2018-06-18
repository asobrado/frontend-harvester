import { Injectable } from '@angular/core';


@Injectable()
export class Usuario {
    public firstname: string;
    public lastname: string;
    public email: string;
    public password: string;
    public avatarUrl: string;
    public creationDate: string;
    public preferredLang: string;
    public connected = false;

    public constructor( data: any = {}) {
        this.firstname = data.firstname || '';
        this.lastname = data.lastname || '';
        this.email = data.email || '';
        this.avatarUrl = data.avatarUrl || '';
        this.creationDate = data.creation_date || Date.now();
        this.preferredLang = data.preferredLang || null;
        this.connected = data.connected || false;
    }

    public getName() {
        return this.firstname + ' ' + this.lastname;
    }
}