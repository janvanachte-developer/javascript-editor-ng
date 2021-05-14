import {Action} from "./action";
import Store from "./store";

export interface Reducer<STATE> {
    (
        state: STATE,
        action: Action,
        store: Store<STATE>
    ): STATE;
}