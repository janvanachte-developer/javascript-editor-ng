import {Action} from "./action";
import {Reducer} from "./reducer";
import {BehaviorSubject, Subject} from "rxjs";
import {scan} from "rxjs/operators";

class Store<STATE> extends BehaviorSubject<STATE> {
    private dispatcher: Subject<Action>

    constructor(
        private reducer: Reducer<STATE>,
        initialState: STATE
    ) {
        super(initialState);
        this.dispatcher = new Subject<Action>();
        this.dispatcher
            .pipe(
                scan((state: STATE, action: Action) => this.reducer(state, action, this),
                    initialState)
            ).subscribe((state) => super.next(state))
        ;
    }

    getState(): STATE {
        return this.value;
    }

    dispatch(action: Action): void {
        this.dispatcher.next(action);
    }
}

export default Store;
