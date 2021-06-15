import {Component, OnInit} from '@angular/core';
import {Rule} from "./model/rule";
import RulesStateService from "./state/rules-state.service";
import {LoggerService} from "../monitoring/log/logger.service";

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

    rules: Rule[];

    constructor(private service: RulesStateService, private logger: LoggerService) {}

    ngOnInit(): void {
        this.service.subscribe(next => this.rules = next.rules);
        this.logger.debug("RulesComponent initialised");
    }

    addRule() {
        this.service.addRule();
    }
}
