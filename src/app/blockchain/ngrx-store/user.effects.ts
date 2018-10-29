import { ClientService } from './../service/client.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, debounceTime, distinctUntilChanged, switchMap } from '../../../../node_modules/rxjs/operators';
import { AddCoins, ADD_COIN } from './blockchain.action';
import { Observable } from '../../../../node_modules/rxjs';
import { Action } from '../../../../node_modules/@ngrx/store';

@Injectable()
export class UserEffects {

    constructor(
        private clientService: ClientService,
        private actions$: Actions
    ) { console.log('EVENT----') }

    // public fetch = (actions, role) => this.actions$.pipe(
    //     ofType(actions),
    //     map(action => actions),
    //     debounceTime(400),
    //     distinctUntilChanged(),
    //     switchMap(partialAddress => this.clientService
    //         .getRates()
    //         .pipe(
    //             map(results => new AddCoins(results)),
    //         // map(results => results),
    //         //   catchError(error => of(new FindAddressesRejected(error)))
    //     )
    //     )
    // );



    // @Effect()
    // protected fetchEditors$ = this.fetch(ADD_COIN, "Editors")





    @Effect()
    loadAuths$: Observable<any> = this.actions$.pipe(
        ofType(ADD_COIN), // whenever this action call this event triggered
        switchMap(() => {
            return this.clientService.getData()
        })
    );



    // @Effect()
    // loadAuths$: Observable<Action> = this.actions$.pipe(
    //   ofType(authActions.AuthActionTypes.LoadAuths),
    //   switchMap(() => {
    //     return this.http.get<string>('login')
    //       .pipe(
    //         map((userName) => {
    //           return new authActions.SetAuths(userName);
    //         })
    //       )
    //   })
    // );
}