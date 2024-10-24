
import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { IUser } from '../../entities/users/user.model';


@Injectable({
    providedIn: 'root'
})
export class UserService {
    private apiUrl = 'https://dummyjson.com/users';

    private readonly _http: HttpClient = inject(HttpClient);

    public getUsers(): Observable<IUser[]> {
        return this._http.get<IUser[]>(this.apiUrl);
    }
}
