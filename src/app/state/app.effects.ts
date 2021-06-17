import {Injectable} from "@angular/core";
import {Actions} from "@ngrx/effects";
import {Store} from "@ngrx/store";
import {AppState} from "./app.reducer";
import {LoggerService} from "../monitoring/log/logger.service";


@Injectable()
export class AppStateEffects { //implements OnInitEffects {

    constructor(private action$: Actions, private store: Store<AppState>, private logger:LoggerService) {
        this.logger.debug('AppStateEffects created');
    }

/*
    ngrxOnInitEffects(): Action {
        return null;
    }
*/
}