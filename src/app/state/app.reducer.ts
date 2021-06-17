import {Action, ActionReducer, ActionReducerMap, createReducer, MetaReducer} from '@ngrx/store';
import {CodeState} from "../code/state/code.reducer";
import {RulesState} from "../rules/state/rules.reducer";
import {rootInitialState} from "./app-cookie.service";

export interface AppState {
    rules: RulesState,
    code: CodeState
}

export const rootReducers: ActionReducerMap<any, Action> = {
    rootReducer: createReducer(rootInitialState)
};

export function loggingMetaReducer(reducer: ActionReducer<any>): ActionReducer<any> {
    return function(state, action) {
        console.log('state', state);
        console.log('action', action);

        return reducer(state, action);
    };
}

export const rootMetaReducers: MetaReducer<any, Action>[] = [loggingMetaReducer];

