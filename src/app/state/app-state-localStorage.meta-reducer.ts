// https://nils-mehlhorn.de/posts/ngrx-keep-state-refresh
/*export const deserialisingMetaReducer = (
    reducer: ActionReducer<AppState>
): ActionReducer<AppState> => {
    return (state, action) => {

        if (action.type === INIT || action.type === UPDATE) {
            const storageValue = localStorage.getItem(LOCALSTORAGE);
            if (storageValue) {
                try {
                    return JSON.parse(storageValue);
                } catch {
                    localStorage.removeItem(LOCALSTORAGE);
                }
            }
        }
        const nextState = reducer(state, action);
        localStorage.setItem(LOCALSTORAGE, JSON.stringify(nextState));
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

export const localStorageMetaReducers: MetaReducer<any, Action>[] = [hydrationMetaReducer, deserialisingMetaReducer];*/

