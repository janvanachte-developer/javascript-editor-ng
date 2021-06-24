import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RulesRoutingModule} from './rules-routing.module';
import {RulesComponent} from './rules.component';
import {RuleEditingComponent} from './component/rule-editing/rule-editing.component';
import {RuleComponent} from './containers/rule/rule.component';
import {RuleExecutionComponent} from './component/rule-execution/rule-execution.component';
import {RulesTabsComponent} from './navigation/tabs/tabs.component';
import {RulesCardsComponent} from './component/rules-cards/rules-cards.component';
import {RuleSideMenuComponent} from './navigation/side-menu/side-menu.component';
import {RulesStateModule} from "./state/rules-state.module";
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
    declarations: [
        RulesComponent,
        RuleEditingComponent,
        RuleComponent,
        RuleExecutionComponent,
        RulesCardsComponent,
        RulesTabsComponent,
        RuleSideMenuComponent
    ],
    imports: [
        CommonModule,
        RulesStateModule,
        RulesRoutingModule,
        ReactiveFormsModule
    ]
})
export class RulesModule {
}
