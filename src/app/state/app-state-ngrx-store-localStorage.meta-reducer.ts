import {Action, ActionReducer, MetaReducer} from "@ngrx/store";
import {AppState} from "./app.reducer";
import {localStorageSync} from "ngrx-store-localstorage";

// https://blog.briebug.com/blog/how-to-add-ngrx-store-slices-into-localstorage
import merge from "lodash.merge";

const INIT_ACTION = "@ngrx/store/init";
const UPDATE_ACTION = "@ngrx/store/update-reducers";

const mergeReducer = (state: AppState, rehydratedState: AppState, action: Action): AppState => {
    if ((action.type === INIT_ACTION || action.type === UPDATE_ACTION) && rehydratedState) {
        state = merge(state, rehydratedState);
    }

    return state;
}

function localStorageSyncReducer(reducer: ActionReducer<AppState>): ActionReducer<AppState> {
    return localStorageSync({
        keys: [
            { rules: ['rules']}
        ],
        rehydrate: true
    })(reducer);
}

export const ngrxStoreLocalStorageMetaReducers: Array<MetaReducer<AppState, any>> = [localStorageSyncReducer];
//export const ngrxStoreLocalStorageMetaReducers: MetaReducer<any, Action>[] = [localStorageSyncMetaReducer];
