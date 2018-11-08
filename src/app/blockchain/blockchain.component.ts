import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from './ngrx-store/app.state';

import * as actions from './ngrx-store/blockchain.action';

@Component({
  selector: 'app-blockchain',
  templateUrl: './blockchain.component.html',
  styleUrls: ['./blockchain.component.scss']
})
export class BlockchainComponent implements OnInit {

  angForm: FormGroup;
  loading: any;
  constructor(private store: Store<AppState>, private fb: FormBuilder) {
    this.createForm();
  }
  createForm() {
    this.angForm = this.fb.group({
      name: ['', Validators.required],
      price: ['', Validators.required]
    });
  }

  addCoin(name, price) {

    //Note: Best practice
    this.store.dispatch(new actions.AddCoins({ name: name, price: price }));

    // this.store.dispatch({
    //   type: 'ADD_COIN',
    //   payload: <Blockchain> {
    //     name: name,
    //     price: price
    //   }
    // });
  }

  ngOnInit() {
  }

}