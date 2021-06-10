import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../../state/app.reducer";
import {rules} from "../../state/app.selectors";
import {RulesState} from "./rules.reducer";
import {ActivatedRoute, Router} from "@angular/router";
import {addRule} from "./rules.actions";

@Injectable()
class RulesStateService {

    private state: RulesState;

    constructor(private appState: Store<AppState>, private router: Router, private route: ActivatedRoute) {
        this.appState.select(rules).subscribe(next => this.state = next)
     }

    getState(): Observable<RulesState> {
        return this.appState.select(rules);
    }

    dispatch(action: Action): void {
        this.appState.dispatch(action);
    }

    addRule() {
        const id = this.state.rules.length + 1 + '';
        this.appState.dispatch(addRule({ rule: {
                id: id,
                name: "An added Rule",
                active: false
            }}));
        this.router.navigate([ 'rules',id]);
    }

    subscribe( subscriptionFunction) {
        this.getState().subscribe(subscriptionFunction);
    }
}

export default RulesStateService;