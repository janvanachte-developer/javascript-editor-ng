import {Injectable} from '@angular/core';
import {LoggerService} from "../monitoring/log/logger.service";
import {AppState} from "./app.reducer";
import {Store} from "@ngrx/store";
import {AppCookieService} from "./app-cookie.service";

@Injectable({
  providedIn: 'root'
})
export class AppStateService {

  constructor(private state: Store<AppState>,  private cookieService: AppCookieService, private logger: LoggerService) { }

/*  restoreState() {
    this.logger.debug('AppStateService restoring state.')

    const rules: RulesState = this.cookieService.read('rules');
/!*
    [
      {id: 'rule1', name: 'Rule 1', active: false},
      {id: 'rule2', name: 'Rule With a Longer Name', active: true},
      {id: 'rule3', name: 'Another Rule', active: false},
      {id: 'rule4', name: 'Rule 4', active: false}
    ];
*!/

    rules.rules.forEach(rule =>{
      this.state.dispatch(addRule({rule: rule}))
    });
  }*/
}
