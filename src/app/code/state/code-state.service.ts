import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../../state/app.reducer";
import {code} from "../../state/app.selectors";
import {CodeState} from "./code.reducer";

@Injectable()
class CodeStateService {

    constructor(private appState: Store<AppState>) {}

    getState(): Observable<CodeState> {
        return this.appState.select(code);
    }

    dispatch(action: Action): void {
        this.appState.dispatch(action);
    }
}

export default CodeStateService;