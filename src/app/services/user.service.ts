import {Injectable} from '@angular/core';
import {User} from "../shared/model/user";
import {Observable, BehaviorSubject} from "rxjs";
import {Http, Headers} from "@angular/http";
import { map, tap, publishLast, refCount } from "rxjs/operators";


export const UNKNOWN_USER : User = {
    firstName: 'Unknown'
};


@Injectable()
export class UserService {

    private subject = new BehaviorSubject(UNKNOWN_USER);

    user$: Observable<User> = this.subject.asObservable();

    constructor(private http:Http) {

    }

    login(email:string, password:string): Observable<User> {

        const headers = new Headers();
        headers.append('Content-Type', 'application/json');

        return this.http.post('/api/login', {email,password}, {headers}).pipe(
            map(res => res.json()),
            tap(user => console.log(user)),
            tap(user => this.subject.next(user)),
            publishLast(),
            refCount()
        )

    }


}
