import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { BlockchainComponent } from './blockchain/blockchain.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DisplayComponent } from './blockchain/display/display.component';
import { reducers } from './blockchain/ngrx-store/app.state';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot(reducers),
    ReactiveFormsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [] //exclude from prodection
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
