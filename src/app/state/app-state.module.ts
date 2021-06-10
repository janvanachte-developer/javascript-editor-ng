import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from "@ngrx/store";
import {rootInitialState, rootMetaReducers, rootReducers} from "./app.reducer";
import {EffectsModule} from "@ngrx/effects";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        StoreModule.forRoot(
            rootReducers,
            {
                metaReducers: rootMetaReducers,
                initialState: rootInitialState
            }),
        EffectsModule.forRoot(),
        StoreRouterConnectingModule.forRoot()
        /*        StoreDevtoolsModule.instrument({
                    maxAge: 25, // Retains last 25 states
                    logOnly: environment.production, // Restrict extension to log-only mode
                })*/
    ]
})
export class AppStateModule {
}
