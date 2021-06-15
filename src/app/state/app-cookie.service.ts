import {Injectable} from "@angular/core";
import {rulesInitialState, RulesState} from "../rules/state/rules.reducer";
import {codeInitialState} from "../code/state/code.reducer";
import {LoggerService} from "../monitoring/log/logger.service";
import {InjectorInstance} from "./app-state.module";
import {CookieService} from "ngx-cookie-service";

@Injectable({providedIn: 'root'})
export class AppCookieService {


    constructor( private cookieService: CookieService,  private logger: LoggerService) {
        logger.debug('AppCookService created');
    }

    read(rules: string): RulesState {

        return <RulesState>JSON.parse(this.cookieService.get('rules'));
    }

    write(rules: any) {
        this.cookieService.set('rules', JSON.stringify(rules))
    }
}

export const rootInitialState = () => {

    console.log('########## rootInitialState ');

    console.log(InjectorInstance ? 'InjectorInstance exists' :'InjectorInstance does not exist')

    //const service = InjectorInstance.get<AppCookieService>(AppCookieService);
//    const logger = InjectorInstance.get<LoggerService>(LoggerService);

//    logger.debug('building rootInitialState from scratch')

    return {
        rules: rulesInitialState,
        code: codeInitialState
    };
}