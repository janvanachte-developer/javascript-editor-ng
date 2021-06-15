import {Injectable} from "@angular/core";
import {Actions, createEffect, ofType, OnInitEffects} from "@ngrx/effects";
import {deserialiseAppState, deserializeAppStateFailure, deserializeAppStateSuccess} from "./app.actions";
import {Action, Store} from "@ngrx/store";
import {AppState} from "./app.reducer";
import {distinctUntilChanged, map, switchMap, tap} from "rxjs/operators";
import {LoggerService} from "../monitoring/log/logger.service";


@Injectable()
export class AppStateEffects implements OnInitEffects {

    constructor(private action$: Actions, private store: Store<AppState>, private logger:LoggerService) {
        this.logger.debug('AppStateEffects created');
    }


    ngrxOnInitEffects(): Action {
        return deserialiseAppState();
    }

    private readonly localStorageKey = "state";

    serialize$ = createEffect(
        () =>
            this.action$.pipe(
                ofType(deserializeAppStateSuccess, deserializeAppStateSuccess),
                switchMap(() => this.store),
                distinctUntilChanged(),
                tap((state) => {
                    const storageValue = JSON.stringify(state);
                    this.logger.debug('serialising AppState ' + storageValue, 'AppStateEffects');
                    localStorage.setItem(this.localStorageKey, storageValue);
                })
            ),
        {dispatch: false}
    );


    deserializeAppState$ = createEffect(
        () =>
        this.action$.pipe(
            ofType(deserialiseAppState),
            map(() => {
                this.logger.debug('deserialising AppState','AppStateEffects');
                const storageValue = localStorage.getItem(this.localStorageKey);
                this.logger.debug('deserialising AppState storageValue ' + storageValue,'AppStateEffects');
                if (storageValue) {
                    this.logger.debug('deserialising AppState parsing locqlStorage','AppStateEffects');
                    try {
                        const state = JSON.parse(storageValue);
                        this.logger.debug('deserialising AppState returning State using action','AppStateEffects');
                        return deserializeAppStateSuccess({state});
                    } catch {
                        localStorage.removeItem(this.localStorageKey);
                    }
                }
                this.logger.error('deserialising AppState failed','AppStateEffects');
                return deserializeAppStateFailure();
            })
        )
    );
}