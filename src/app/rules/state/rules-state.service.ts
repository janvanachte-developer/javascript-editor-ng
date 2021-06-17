import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {Action, Store} from "@ngrx/store";
import {AppState} from "../../state/app.reducer";
import {rules} from "../../state/app.selectors";
import {RulesState} from "./rules.reducer";
import {Router} from "@angular/router";
import {addRule} from "./rules.actions";
import {AppStateService} from "../../state/app-state.service";
import {LoggerService} from "../../monitoring/log/logger.service";

@Injectable()
class RulesStateService {

    private state: RulesState;

    constructor(private appState: Store<AppState>, private router: Router, private appStateService: AppStateService, private logger: LoggerService) {
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
                name: 'New Rule (' + id + ')',
                active: false
            }}));
        this.router.navigate([ 'rules',id]);
    }

    subscribe( subscriptionFunction) {
        this.getState().subscribe(subscriptionFunction);
        this.restoreRouter();
    }

    private restoreRouter() {
        const id = this.state.rules.find(rule => rule.active).id;
        if (id) {
            this.logger.debug('restoring router to rule ' + id, 'RulesState');
            this.router.navigate(['rules', id]);
        }
    }
}

export default RulesStateService;