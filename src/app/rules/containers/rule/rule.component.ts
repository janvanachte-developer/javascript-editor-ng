import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import RulesStateService from "../../state/rules-state.service";
import {Rule} from "../../model/rule";
import {switchMap} from "rxjs/operators";
import {increaseExecuted, updateRule} from "../../state/rules.actions";
import {LoggerService} from "../../../monitoring/log/logger.service";

@Component({
    selector: 'app-rule',
    templateUrl: './rule.component.html',
    styleUrls: ['./rule.component.css']
})
export class RuleComponent implements OnInit {

    id: string;
    rule: Rule;
    //private id$: Subscription;
    //private rule$: Subscription;

    constructor(private router: Router, private activatedRoute: ActivatedRoute, private service: RulesStateService, private logger: LoggerService) {
    }

    ngOnInit(): void {
        console.log('ngOnInit ');

/*        this.id$ = this.activatedRoute.paramMap.subscribe(paramMap => {
            this.id = paramMap.get('id');
            console.log('RuleComponent new id ' + this.id)
        });*/
        this.activatedRoute.paramMap
            .pipe(
                switchMap((paramMap) => {
                    this.id = paramMap.get('id');
                    console.log('RuleComponent new id ' + this.id);

                    return this.service.getState();
                })
            )
            .subscribe(next =>
                {
                    console.log('RuleComponent new rule from Router ' + this.id)

                    return this.rule = this.id ? next.rules.find(rule => this.id === rule.id) : null;}
            );

        this.service.subscribe(next =>
        {
            console.log('RuleComponent new rule from RulesStateService ' + this.id)

            return this.rule = this.id ? next.rules.find(rule => this.id === rule.id) : null;}
    )
    }

    navigate(path) {
        this.router.navigate([{outlets: {primary: path, sidemenu: path}}],
            {relativeTo: this.activatedRoute});
    }

    increaseExcuted(event) {
        this.service.dispatch(increaseExecuted({id: event ? event.id : null }));
    }

    updateRule(rule: Rule) {
        this.logger.debug(rule ? 'invoking action to update rule ' + rule.id : 'update rule event received without valid rule', 'RuleComponent');
        if ( rule && rule.id ){
            this.service.dispatch(updateRule({rule: rule}));
        }
    }
}
