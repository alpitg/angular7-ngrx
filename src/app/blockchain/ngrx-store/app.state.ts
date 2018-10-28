
import { Blockchain } from '../blockchain.model';
import { addCoinReducer, coinReducer } from './blockchain.reducer';
import { ActionReducerMap } from '../../../../node_modules/@ngrx/store';

export interface AppState {
  // readonly blockchain: Blockchain[];
  readonly blockchain: any;
  readonly blockchain1: any;
}


export const reducers: ActionReducerMap<AppState> = {
  blockchain: addCoinReducer,
  blockchain1: coinReducer,
  //NOTE: Add as many reducres you want to add here
};