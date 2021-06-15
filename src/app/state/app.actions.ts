import {createAction, props} from '@ngrx/store';
import {AppState} from "./app.reducer";

const STORE_LOCALLY = 'STORE_LOCALLY';
export const deserialiseAppState = createAction(
    STORE_LOCALLY
);

const STORE_LOCALLY_SUCCESS = 'STORE_LOCALLY_SUCCESS';
export const deserializeAppStateSuccess = createAction(
    STORE_LOCALLY_SUCCESS,
    props<{ state: AppState }>()
);

const STORE_LOCALLY_FAILURE = 'STORE_LOCALLY_FAILURE';
export const deserializeAppStateFailure = createAction(
    STORE_LOCALLY_FAILURE
);