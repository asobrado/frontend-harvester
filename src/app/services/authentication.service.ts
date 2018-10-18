import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { GLOBAL} from "./global";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    public url: string;
    constructor(private http: HttpClient) {

        this.url= GLOBAL.API_URL
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.url}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}