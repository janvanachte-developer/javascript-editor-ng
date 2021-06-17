import {Injector, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreRouterConnectingModule} from '@ngrx/router-store';
import {StoreModule} from "@ngrx/store";
import {rootMetaReducers, rootReducers} from "./app.reducer";
import {EffectsModule} from "@ngrx/effects";
import {CookieService} from "ngx-cookie-service";
import {LoggerService} from "../monitoring/log/logger.service";
import {AppMonitoringModule} from "../monitoring/app-monitoring.module";
import {AppStateEffects} from "./app.effects";
import {ngrxStoreLocalStorageMetaReducers} from "./app-state-ngrx-store-localStorage.meta-reducer";

export const LOCALSTORAGE = 'state';
export const LOCALSTORAGE_NGRX = 'state-ngrx-store-localstorage';

export let InjectorInstance: Injector;

@NgModule({
    declarations: [
    ],
    imports: [
        AppMonitoringModule,
        CommonModule,
        StoreModule.forRoot(
            rootReducers,
            {
                metaReducers: [...rootMetaReducers,...ngrxStoreLocalStorageMetaReducers]//,
                // initialState: rootInitialState
            }),
        EffectsModule.forRoot([AppStateEffects]),
        StoreRouterConnectingModule.forRoot()
        /*        StoreDevtoolsModule.instrument({
                    maxAge: 25, // Retains last 25 states
                    logOnly: environment.production, // Restrict extension to log-only mode
                })*/
    ],
    providers: [
        CookieService
    ]
})
export class AppStateModule {
    constructor(private injector: Injector, private logger: LoggerService) {
        InjectorInstance  = injector;
        this.logger.debug('AppStateModule created') ;
    }
}