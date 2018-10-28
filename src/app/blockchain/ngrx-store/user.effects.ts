import { ClientService } from './../service/client.service';
import { Observable, of } from '../../../../node_modules/rxjs';
import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { HttpClient } from '@angular/common/http';

import * as actions from './blockchain.action';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';
import { AddCoins } from './blockchain.action';
import { map, debounceTime, distinctUntilChanged, switchMap } from '../../../../node_modules/rxjs/operators';

@Injectable()
export class CurrencyEffects {

    constructor(
        private clientService: ClientService,
        private actions$: Actions
    ) { }

    public fetch = (actions, role) => this.actions$.pipe(
        ofType('DEFINE_TYPE'),
        map(action => actions),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(partialAddress => this.clientService
            .getRates()
            .pipe(
                map(results => new AddCoins(results)),
            //   catchError(error => of(new FindAddressesRejected(error)))
        )
        )
    );



    @Effect()
    protected fetchEditors$ = this.fetch('Action', "Editors")

}