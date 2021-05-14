import {Action} from "./action";
import {Reducer} from "./reducer";

class Store<STATE> {
    private _state: STATE;
    private _listeners: ListenerCallback[] = [];

    constructor(
        private reducer: Reducer<STATE>,
        initialState: STATE
    ) {
        this._state = initialState;
    }

    getState(): STATE {
        return this._state;
    }

    subscribe(listener: ListenerCallback): UnsubscribeCallback {
        this._listeners.push(listener);
        return () => { // returns an "unsubscribe" function
            this._listeners = this._listeners.filter(l => l !== listener);
        };
    }

    dispatch(action: Action): void {
        this._state = this.reducer(this._state, action, this);
        this._listeners.forEach((listener: ListenerCallback) => listener());
    }
}

export default Store;

export interface ListenerCallback {
    (): void;
}
export interface UnsubscribeCallback {
    (): void;
}