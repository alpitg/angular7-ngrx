import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Blockchain } from '../blockchain.model';
import { Store } from '@ngrx/store';
import { AppState } from '../ngrx-store/app.state';

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

}
