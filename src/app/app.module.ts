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
import { EffectsModule } from '../../node_modules/@ngrx/effects';
import { UserEffects } from './blockchain/ngrx-store/user.effects';
import { ClientService } from './blockchain/service/client.service';
import { HttpClientModule } from '../../node_modules/@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    BlockchainComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([UserEffects]),
    ReactiveFormsModule,
    !environment.production ? StoreDevtoolsModule.instrument() : [] //exclude from prodection
  ],
  providers: [ClientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
