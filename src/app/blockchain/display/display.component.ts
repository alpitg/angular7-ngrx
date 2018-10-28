import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blockchain } from '../blockchain.model';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx-store/app.state';
import * as actions from '../ngrx-store/blockchain.action';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent implements OnInit {

  coins: Observable<Blockchain[]>;
  constructor(private store: Store<AppState>) {
    this.coins = this.store.select(state => state.blockchain);
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
