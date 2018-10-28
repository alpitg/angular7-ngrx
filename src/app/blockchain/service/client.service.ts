import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from '../../../../node_modules/rxjs';
import { catchError, map, tap } from 'rxjs/operators';
@Injectable()
export class ClientService {
    constructor(private http: HttpClient) { 
        // console.log('http clirnt');
    }

    public getData() {
        return this.http.get('assets/config.json');
    }

    getRates(): Observable<any> {
        console.log('http clirnt');
        return this.http.get<any>('34')
        .pipe(
          tap(heroes => console.log('fetched heroes')),
        //   catchError("errorhandling common function")
        );
    }
}

// https://malcoded.com/posts/angular-ngrx-guide