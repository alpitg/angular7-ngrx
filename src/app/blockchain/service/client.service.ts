import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import * as selfActions from '../ngrx-store/blockchain.action';
@Injectable()
export class ClientService {
    constructor(private http: HttpClient) {
        // console.log('http clirnt');
    }

    public getData(): Observable<any> {
        console.log("API Request");
        return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
            .pipe(
                map((userName) => {
                    return new selfActions.UpdateCoins(1, { name: "alpit", price: 45 });
                }),

                catchError((error) => { console.log(error); return ""; })
            )
    }

}

// https://malcoded.com/posts/angular-ngrx-guide