import { Blockchain } from "../blockchain.model";
import { Action } from "../../../../node_modules/@ngrx/store";

export const ADD_COIN = 'ADD_COIN';

// export class AddCoins implements Action {
//     readonly type = ADD_COIN;
//     payload: Blockchain;
// }

class AddCoins implements Action {
    readonly type = ADD_COIN;
    payload: Blockchain;
}

//type: it will only appeaar when you are defining type
export type blochainList = AddCoins;