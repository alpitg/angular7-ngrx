
import { Blockchain } from '../../blockchain/blockchain.model';
import * as blockchainActions from './blockchain.action';
import { SpinnerAction } from './blockchain.action';

const initialState: Blockchain[] = [];

export interface State {
    show: boolean;
}

const initialState1: State = {
    show: false
};


export function addCoinReducer(state = initialState, action: blockchainActions.blochainListAction) {
    switch (action.type) {
        case blockchainActions.ADD_COIN:
            return [...state, action.payload];

        case blockchainActions.ADD_COINS:
            return [...state, ...action.payload];

        case blockchainActions.UPDATE_COIN:
            const coinDetail = state[action.index];
            const updatedCoin = {
                ...coinDetail,
                ...action.payload
            };
            const coinsList = [...state];
            coinsList[action.index] = updatedCoin;
            return [...state, coinsList];

        case blockchainActions.DELETE_COIN:
            debugger

            const oldList = [...state];
            oldList.splice(action.payload, 1);
            return [...state, oldList];
        default:
            return state;
    }
}

//NOTE: Each function must use different "action.type" else it will affect states  
export function coinReducer(state: Blockchain[] = [], action: blockchainActions.blochainListActionTrial) {
    switch (action.type) {
        case blockchainActions.DELETE_COIN:
            debugger

            const oldList = [...state];
            oldList.splice(action.payload, 1);
            return [...state, oldList];
        default:
            return state;
    }
}

export function loaderReducer(state: State = initialState1, action: SpinnerAction) {
    switch (action.type) {
        case blockchainActions.SPINNER_HIDE:
            return { ...state, show: false };
        case blockchainActions.SPINNER_SHOW:
            return { ...state, show: true };
        default:
            return state;
    }
}

export const isShowing = (state: State) => state.show;


//#region 

// export interface FeatureState {
//     receipt: State;
// }

// export interface State {
//     data: Blockchain[];
// }

// const initialState: State = {
//     data: []
// }


// export function addCoinReducer(state = initialState, action: blockchainActions.blochainListAction) {
//     switch (action.type) {
//         case blockchainActions.ADD_COIN:
//             return { ...state.data, ...action.payload.data };

//         case blockchainActions.ADD_COINS:
//             return [...state.data, ...action.payload];

//         case blockchainActions.UPDATE_COIN:
//             const coinDetail = state[action.payload.index];
//             const updatedCoin = {
//                 ...coinDetail,
//                 ...action.payload
//             };
//             debugger
//             const coinsList = [...state.data];
//             coinsList[action.payload.index] = updatedCoin;
//             return { ...state.data, ...coinsList };

//         case blockchainActions.DELETE_COIN:
//             debugger

//             const oldList = [...state.data];
//             oldList.splice(action.payload, 1);
//             return [...state.data, oldList];
//         default:
//             return state;
//     }
// }

//#endregion