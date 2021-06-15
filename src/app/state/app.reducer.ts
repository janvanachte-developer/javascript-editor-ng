import {Action, ActionReducer, ActionReducerMap, createReducer, INIT, MetaReducer, UPDATE} from '@ngrx/store';
import {CodeState} from "../code/state/code.reducer";
import {RulesState} from "../rules/state/rules.reducer";
import {rootInitialState} from "./app-cookie.service";
import {deserializeAppStateSuccess} from "./app.actions";

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

// https://nils-mehlhorn.de/posts/ngrx-keep-state-refresh
export const dehydrationMetaReducer = (
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
    return (state, action) => {
        if (action.type === INIT || action.type === UPDATE) {
            const storageValue = localStorage.getItem("state");
            if (storageValue) {
                try {
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem("state");
                }
            }
        }
        const nextState = reducer(state, action);
        localStorage.setItem("state", JSON.stringify(nextState));
        return nextState;
    };
};

function isHydrateSuccess(
    action: Action
): action is ReturnType<typeof deserializeAppStateSuccess> {
    return action.type === deserializeAppStateSuccess.type;
}

export const hydrationMetaReducer = (
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
    return (state, action) => {
        if (isHydrateSuccess(action)) {
            return action.state;
        } else {
            return reducer(state, action);
        }
    };
};

export const rootMetaReducers: MetaReducer<any, Action>[] = [loggingMetaReducer, hydrationMetaReducer, dehydrationMetaReducer];

