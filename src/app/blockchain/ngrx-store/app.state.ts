
import { Blockchain } from '../blockchain.model';
import { addCoinReducer, coinReducer, loaderReducer, isShowing } from './blockchain.reducer';
import { ActionReducerMap, createSelector, createFeatureSelector } from '../../../../node_modules/@ngrx/store';

export interface AppState {
  // readonly blockchain: Blockchain[];
  readonly blockchain: any;
  readonly blockchain1: any;
  readonly spinner: any;
}


export const reducers: ActionReducerMap<AppState> = {
  blockchain: addCoinReducer,
  blockchain1: coinReducer,
  spinner: loaderReducer
  // snackbar: fromSnackbar.reducer,
  //NOTE: Add as many reducres you want to add here
};

export const selectSpinnerEntity = createFeatureSelector<any>(
  "spinner"
);
export const isSpinnerShowing = createSelector(
  selectSpinnerEntity,
  isShowing
);
