import { ClientService } from './../service/client.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, debounceTime, distinctUntilChanged, switchMap } from '../../../../node_modules/rxjs/operators';
import { AddCoins, ADD_COIN } from './blockchain.action';

@Injectable()
export class UserEffects {

    constructor(
        private clientService: ClientService,
        private actions$: Actions
    ) { console.log('EVENT----')}

    public fetch = (actions, role) => this.actions$.pipe(
        ofType(actions),
        map(action => actions),
        debounceTime(400),
        distinctUntilChanged(),
        switchMap(partialAddress => this.clientService
            .getRates()
            .pipe(
                map(results => new AddCoins(results)),
                // map(results => results),
            //   catchError(error => of(new FindAddressesRejected(error)))
        )
        )
    );



    @Effect()
    protected fetchEditors$ = this.fetch(ADD_COIN, "Editors")

}