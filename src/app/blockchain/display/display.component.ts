import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blockchain } from '../blockchain.model';
import { Store, select } from '@ngrx/store';
import { AppState, isSpinnerShowing } from '../ngrx-store/app.state';
import * as actions from '../ngrx-store/blockchain.action';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  coins: Observable<Blockchain[]>;
  loading: Observable<{}>;
  constructor(private store: Store<AppState>) {
    this.coins = this.store.select(state => state.blockchain);
    console.log(this.coins);
    // this.loading = this.store.pipe(select(isSpinnerShowing));
    // console.log(this.loading);

  }

  ngOnInit() {
  }

  deleteCoin(event: any) {
    debugger
    let index = event;
    // this.store.dispatch(new actions.DeleteCoins(index));
    this.store.dispatch(new actions.UpdateCoins(0, { name: 'Alpit', price: 7770766687 }));
  }

}
