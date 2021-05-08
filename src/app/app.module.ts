import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ComponentsModule} from './shared/components/components.module';
import {CodeModule} from './code/code.module';
import {EffectsModule} from "@ngrx/effects";
import {StoreModule} from "@ngrx/store";
import {StoreDevtoolsModule} from "@ngrx/store-devtools";
import {environment} from "../environments/environment.prod";
import {rootInitialState, rootMetaReducers, rootReducers} from "./state/app.reducer";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ComponentsModule,
        CodeModule,
        StoreModule.forRoot(
            rootReducers,
            {
                metaReducers: rootMetaReducers,
                initialState: rootInitialState
            }),
        EffectsModule.forRoot(),
        NgbModule.forRoot(),

        StoreDevtoolsModule.instrument({
            maxAge: 25, // Retains last 25 states
            logOnly: environment.production, // Restrict extension to log-only mode
        })
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
