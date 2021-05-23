import {Injectable} from "@angular/core";
import {CodeModel} from "./code.model";
import {Observable} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../../state/app.state";

@Injectable()
class CodeStoreService {


    constructor(private appState: Store<AppState>) {

    }

    getStore(): Observable<CodeModel> {

        return this.appState.select((appState) => appState.code)
    }

    dispatch(action: Action): void {
        console.log('dispatching ' + action.type);
        this.appState.dispatch(action);
    }
}

export default CodeStoreService;