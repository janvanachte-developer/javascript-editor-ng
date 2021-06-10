import {Component, OnInit} from '@angular/core';
import {Rule} from "./model/rule";
import RulesStateService from "./state/rules-state.service";

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

    rules: Rule[];

    constructor(private service: RulesStateService) {
        // appState.subscribe(something => {
        //     console.log('new state: ' + JSON.stringify(something));
        //     // @ts-ignore
        //     this.rules = something.rules.rules;
        //     console.log('new value for rules: ' + JSON.stringify(this.rules));
        // })
    }

    ngOnInit(): void {
        this.service.subscribe(next => this.rules = next.rules);
    }

    addRule() {
        this.service.addRule();
    }
}
