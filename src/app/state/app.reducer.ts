import {Action, ActionReducer, ActionReducerMap, createReducer, MetaReducer} from '@ngrx/store';
import {codeInitialState, CodeState} from "../code/state/code.reducer";
import {rulesInitialState, RulesState} from "../rules/state/rules.reducer";

export interface AppState {
    rules: RulesState,
    code: CodeState
}
export const rootInitialState = () => {

    console.log('########## rootInitialState ');


    return {
        rules: rulesInitialState,
        code: codeInitialState
    };
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

