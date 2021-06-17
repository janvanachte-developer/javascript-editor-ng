import {ActionReducer, MetaReducer} from "@ngrx/store";
import {AppState} from "./app.reducer";
import {localStorageSync} from "ngrx-store-localstorage";

// https://github.com/btroncone/ngrx-store-localstorage
/*export const localStorageSyncMetaReducer = (
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
    return localStorageSync({
        keys: ['rules'],
        storageKeySerializer: (key) => `cool_${key}`,
    });
};*/

// https://blog.briebug.com/blog/how-to-add-ngrx-store-slices-into-localstorage
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
