import { Blockchain } from "../blockchain.model";
import { Action } from "../../../../node_modules/@ngrx/store";

export const ADD_COIN = 'ADD_COIN';
export const ADD_COINS = 'ADD_COINS';
export const UPDATE_COIN = 'UPDATE_COIN';
export const DELETE_COIN = 'DELETE_COIN';

export class AddCoins implements Action {
    readonly type = ADD_COIN;
    constructor(public payload: Blockchain) {
    };
}

export class EditCoins implements Action {
    readonly type = ADD_COINS;
    constructor(public payload: Blockchain[]) { };
    // constructor(public payload: { data: Blockchain }) { };

}


export class UpdateCoins implements Action {
    readonly type = UPDATE_COIN;
    constructor(public index: number, public payload: Blockchain) { };
}


export class DeleteCoins implements Action {
    readonly type = DELETE_COIN;
    constructor(public payload: number) { };
}

//type: it will only appeaar when you are defining type
export type blochainListAction = AddCoins | EditCoins | UpdateCoins | DeleteCoins;
export type blochainListActionTrial = DeleteCoins;


//loader
export const SPINNER_SHOW = "SPINNER_SHOW";
export const SPINNER_HIDE = "SPINNER_HIDE";

export class HideSpinner implements Action {
    readonly type = SPINNER_HIDE;
}

export class ShowSpinner implements Action {
    readonly type = SPINNER_SHOW;
}

export type SpinnerAction = ShowSpinner | HideSpinner;
