import {Action} from "./action";

export interface Reducer<STATE> {
    (
        state: STATE,
        action: Action
    ): STATE;
}