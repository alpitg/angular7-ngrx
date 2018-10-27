
import { Blockchain } from '../../blockchain/blockchain.model';
import * as blockchainActions from './blockchain.action';

export function addCoinReducer(state: Blockchain[] = [], action: blockchainActions.blochainList) {
    switch (action.type) {
        case blockchainActions.ADD_COIN:
            return [...state, action.payload];
        default:
            return state;
    }
}