import {Injectable} from '@angular/core';
import {Actions, createEffect, ofType} from '@ngrx/effects';
import {filter, map} from "rxjs/operators";
import {ROUTER_NAVIGATION, RouterNavigationAction} from "@ngrx/router-store";
import {selectRule, UPDATE_RULE, updateRule_OK} from "./rules.actions";
import RulesStateService from "./rules-state.service";
import {LoggerService} from "../../monitoring/log/logger.service";

@Injectable()
export class RulesEffects {

    constructor(private actions$: Actions, private service: RulesStateService, private logger: LoggerService) {

        actions$.subscribe(action => {
            console.log('Action : '  + action.type);
        })
    }

    selectRule$ = createEffect(() => {
        console.log('effect selectRule')

        return this.actions$.pipe(
            ofType(ROUTER_NAVIGATION),
            filter((routerNavigationAction: RouterNavigationAction) => {
                console.log('routerNavigationAction: ' + JSON.stringify(routerNavigationAction.payload));
                return routerNavigationAction.payload.routerState.url.startsWith('/rules/')}),
            map((routerNavigationAction: RouterNavigationAction) => routerNavigationAction.payload.routerState.url.replace('/rules/','')), // TOOD use some acessor to get path params
            map(id => {
                console.log('triggering action SELECT_RULE with id: ' + id);
                return selectRule({id: id});
            })
        )
    })

    updateRule$ = createEffect(() => {
        return this.actions$.pipe(
            ofType(UPDATE_RULE),
            map(rule => {
                // @ts-ignore
                console.log('triggering action UPDATE_RULE_OK with id: ' + rule.id);
                return updateRule_OK({rule: rule});
            })
        )
    })
}