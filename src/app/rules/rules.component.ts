import {Component, OnInit} from '@angular/core';
import {Rule} from "./model/rule";

@Component({
    selector: 'app-rules',
    templateUrl: './rules.component.html',
    styleUrls: ['./rules.component.css']
})
export class RulesComponent implements OnInit {

    rules: Rule[] = [
        {id: 'rule1', name: 'Rule 1', active: false},
        {id: 'rule2', name: 'Rule With a Longer Name', active: true},
        {id: 'rule3', name: 'Another Rule', active: false},
        {id: 'rule4', name: 'Rule 4', active: false}
    ]

    ngOnInit(): void {
    }

}
