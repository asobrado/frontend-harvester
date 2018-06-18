import {Injectable} from '@angular/core';

@Injectable()
export class GlobalVars {
  isAuthenticated: boolean;

  constructor() {
    this.isAuthenticated = false;
  }

  setIsAuthenticated(value) {
    console.log('grabar');
    this.isAuthenticated = value;
  }

  getIsAuthenticated() {
    return this.isAuthenticated;
  }

}
