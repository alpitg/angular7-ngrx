import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ClientService {
    constructor(private http: HttpClient) { }

    etConfig() {
        return this.http.get('assets/config.json')
            .subscribe();
    }
}

// https://malcoded.com/posts/angular-ngrx-guide